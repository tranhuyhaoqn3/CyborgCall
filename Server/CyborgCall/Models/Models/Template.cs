using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models.Models
{
    public class Template
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        [ForeignKey("UserId")]
        public string UserId { get; set; }
        public virtual ICollection<Action> Action { get; set; }
        public virtual ICollection<Sentence> Sentence { get; set; }
    }
}
