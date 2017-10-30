﻿using System.Collections.Generic;
using EPA.Common.DTO;

namespace EPA.Common.Interfaces
{
    /// <summary>
    ///  This interface describes methods that are available for getting test related data
    /// </summary>
    public interface ITestProvider
    {
        /// <summary>
        ///  This method retrieves list of accessible tests 
        /// </summary>
        ///  <returns> collection of Tests </returns>
        IEnumerable<Test> GetTests();

        /// <summary>
        ///  This method retrieves more detailed information about specific test
        /// </summary>
        ///  <param name="id"> id of the test </param>
        ///  <returns> more detatiled test information </returns>
        TestInfo GetTestInfo(int id);

        /// <summary>
        /// This method returns a collection of questions for a specific test
        /// </summary>
        /// <param name="testId">ID of the test, whose questions we need</param>
        /// <returns>Collection of questions</returns>
        IEnumerable<Question> GetQuestions(int testId);

        /// <summary>
        ///  This method retrieves data about persons professional directory and list of specialties
        /// </summary>
        ///  <param name="points">Amount of points achieved</param>
        ///  <param name="testId">ID of the test, whose results we need</param>
        ///  <returns>  ProfTest's Result </returns>
        Result GetResult(int points, int testId);
    }
}