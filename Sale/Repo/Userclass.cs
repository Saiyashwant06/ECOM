using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VpassSales.Models;

namespace VpassSales.Repo
{
    public class Userclass:IUser
    {
       SalesProjectEntities vps = new SalesProjectEntities();
        
        string IUser.Get(string Username, string Password)
        {
            var salelist = vps.Userlogins.Where(e => e.Username == Username && e.Password == Password).FirstOrDefault();
            if(salelist != null)
            {

                return salelist.Usertype;
            }
            return "not Exist";
        }

        List<ProductsModel> IUser.GetProducts()
        {
            var salelist = vps.Products.Select(e => new ProductsModel()
            {
                ProductID = e.ProductID,
                ProductName = e.ProductName,
                ProductDetails = e.ProductDetails,
                ImageURL = e.ImageURL,
                ProductPrice = e.ProductPrice,
                Category = e.Category,
                Brand = e.Brand,
                MininumOreder = e.MininumOreder
            }).ToList<ProductsModel>();
            vps.SaveChanges();
            vps.Dispose();
            return salelist;
        }
    }
}   