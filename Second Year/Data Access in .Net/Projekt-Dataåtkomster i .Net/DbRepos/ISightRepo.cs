using Models;
using DbModels;
namespace DbRepos;

public interface ISightRepo
{
    public List<csSightDbM> Sights(int _count);
    public void Seed(int _count);
}