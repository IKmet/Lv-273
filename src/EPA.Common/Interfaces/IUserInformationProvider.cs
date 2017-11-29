﻿using EPA.Common.DTO.UserProvider;
using EPA.Common.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace EPA.Common.Interfaces
{
    public interface IUserInformationProvider
    {
        /// <summary>
        /// This method retrieves user personal information
        /// </summary>
        /// <returns>User personal information</returns>
        UserPersonalInfo PersonalInfo();

        /// <summary>
        /// This method retrieves user favorites specialtys
        /// </summary>
        /// <returns>Favorites specialtys list</returns>
        IEnumerable<Specialty> GetFavoriteSpecialty(int page, string UserID);

        /// <summary>
        /// This method retrieves count of Favorite Specialtys
        /// </summary>
        /// <param name="UserID">User id</param>
        /// <returns>Count of favorite specialtys</returns>
        Count CountOfFavoriteSpecialtys(string UserID);

        /// <summary>
        /// Add selected specialty to favorites
        /// </summary>
        /// <param name="UserId">User Id</param>
        /// <param name="SpecialtyId">Specialty Id </param>
        void AddSpecialtyToFavorite(string UserId,int SpecialtyId);

        void RemoveSpecialtyFromFavorite(string UserId, int SpecialtyId);
    }
}
