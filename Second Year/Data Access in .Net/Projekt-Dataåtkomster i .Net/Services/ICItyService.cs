
using Models;
using Services;
using Seido.Utilities.SeedGenerator;

namespace Services;

public interface ICityService {

    public List<csCity> City(int _count);
}