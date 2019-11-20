using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models.Models
{
  public class Result
    {
        [Key]
        public int Id { get; set; }
        public string ResultData { get; set; }

        [ForeignKey("ActionId")]
        public Action Action { get; set; }
    }
}
