using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models.Models
{
    public class Sentence
    {
        [Key]
        public int Id { get; set; }
        public int? Step { get; set; }
        public string Data { get; set; }
        [ForeignKey("TemplateId")]
        public Template Template { get; set; }
    }
}
