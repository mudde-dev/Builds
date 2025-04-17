using Models;
using Services;
using Seido.Utilities.SeedGenerator;


namespace Services;





public interface IUserService {

    public List<csUsers> Users(int _count);
}