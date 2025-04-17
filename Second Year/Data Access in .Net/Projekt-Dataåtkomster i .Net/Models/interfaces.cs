using Configuration;
using Seido.Utilities.SeedGenerator;


namespace Models;

public interface IComments
{

    public Guid CommentId { get; set; }
    public IUser User { get; set; }
    public string Comments { get; set; }
    public List<ISight> Sights { get; set; }
    public DateTime? Date { get; set; }

}
/* public interface IDescription
{

    public Guid DescriptionId { get; set; }
    public string Description { get; set; }
    public DateTime? Date { get; set; }
} */
public interface IUser
{
    public Guid UserId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public List<IComments> Comments { get; set; }

}
public interface ICountry
{
    public Guid CountryId { get; set; }
    public string Name { get; set; }
    public List<ISight> Sights { get; set; }
    public List<ICity> City { get; set; }


}
public interface ICity
{
    public Guid CityId { get; set; }
    public string Name { get; set; }
    public string Address { get; set; }

    public ICountry Country { get; set; }
    public List<ISight> Sights { get; set; }



}

public interface ISight
{

    public Guid SightId { get; set; }
    public enCategory Category { get; set; }
    public string Name { get; set; }
    public List<ICity> City { get; set; }
    public ICountry Country { get; set; }

    public List<IComments> Comments { get; set; }

}
/* 
public interface IAttraction
{
    public Guid AttractionId { get; set; }
    public string Name { get; set; }
    public List<ISight> Sights { get; set; }
} */