using Models;
using Seido.Utilities.SeedGenerator;

namespace Services;

public interface ICommentsService
{
    public List<csComments> Comments(int _count);
}
