﻿using System;
using System.Collections.Generic;
using System.Text;

namespace EPA.Common.dto.CommonQuiz
{
    public class CommonAnswers
    {
        public int ID { get; set; }
        public string Answer { get; set; }
        public CommonQuestions Qestion { get; set; }
    }
}