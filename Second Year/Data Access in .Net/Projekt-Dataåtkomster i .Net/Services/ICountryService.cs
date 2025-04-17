
using Models;
using Services;
using Seido.Utilities.SeedGenerator;

namespace Services;





public interface ICountryService {

    public List<csCountry> Country(int _count);
}