using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using VpassSales.Models;

namespace VpassSales.Repo
{
  public interface IUser
    {
         string  Get(string Username, string Password);

        List<ProductsModel> GetProducts();

    }

}
