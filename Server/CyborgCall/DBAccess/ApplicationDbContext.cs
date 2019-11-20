using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Models.Models;

namespace DBAccess
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options)
        {
        }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Models.Models.Action> Action { get; set; }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Result> Result { get; set; }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Sentence> Sentence { get; set; }
        public virtual Microsoft.EntityFrameworkCore.DbSet<Template> Template { get; set; }


    }
}
