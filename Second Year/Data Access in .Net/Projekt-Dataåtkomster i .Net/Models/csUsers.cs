
using Configuration;
using Seido.Utilities.SeedGenerator;
using System.ComponentModel.DataAnnotations;

namespace Models;

public class csUsers : ISeed<csUsers>, IUser

{
    public virtual Guid UserId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public virtual List<IComments> Comments { get; set; } = null;
    public bool Seeded { get; set; } = false;
    public virtual csUsers Seed(csSeedGenerator sgen)
    {
        Seeded = true;

        UserId = Guid.NewGuid();
        FirstName = sgen.FirstName;
        LastName = sgen.LastName;


        return this;
    }
}