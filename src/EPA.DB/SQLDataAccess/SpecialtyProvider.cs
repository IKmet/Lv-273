﻿using System.Collections.Generic;
using System.Linq;
using EPA.Common.DTO;
using EPA.Common.Interfaces;
using EPA.MSSQL.Models;
using Microsoft.Extensions.Options;

namespace EPA.MSSQL.SQLDataAccess
{
    public class SpecialtyProvider : ISpecialtyProvider
    {
        private readonly EpaContext context;

        public SpecialtyProvider(EpaContext cont)
        {
            this.context = cont;
        }

        public IEnumerable<EPA.Common.DTO.Specialty> GetSpecialtiesByDirection(int idDirection)
        {
            return (from s in this.context.Specialties
                    join u in this.context.Universities on s.University.Id equals u.Id
                    where s.Direction.GeneralDirection.Id == idDirection
                    select new Common.DTO.Specialty()
                    {
                        Name = s.Name,
                        Address = u.Address,
                        District = u.District,
                        Site = u.Site,
                        University = u.Name
                    }).Distinct();
        }

        public IEnumerable<EPA.Common.DTO.GeneralDirection> GetGeneralDirections() => this.context.GeneralDirections.Select(x => x.ToCommon());

        public IEnumerable<Common.DTO.Specialty> GetSpecialtyBySubjects(List<Common.DTO.Subject> listOfSubjects)
        {

            /*return (from sp in this.context.Specialties
                    where sp. 
                        (from ss in this.context.Specialty_Subjects
                        where ss.Subject.Id in listOfSubjects.Select(x=>x.Id))*/
            return null;
                
        }

        public IEnumerable<Common.DTO.Subject> GetAllSubjects() => this.context.Subjects.Select(x => x.ToCommon());
    }
}
