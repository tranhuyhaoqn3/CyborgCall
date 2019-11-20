using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models.Models
{
    public class Action
    {
        [Key]
        public int Id { get; set; }
        public string PhoneNumber { get; set; }
        public bool? IsDone { get; set; }

        [ForeignKey("TemplateId")]
        public Template Template { get; set; }
        public ICollection<Result> Result { get; set; }
    }
}
