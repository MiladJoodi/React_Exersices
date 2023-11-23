import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";

export const getProducts = async(req, res) => {
     try {
          const response = await Product.findAll();
          res.json(response)
     } catch (error) {
          console.log(error.message)
     }
}

export const singleProduct = async(req,res)=> {
     try {
          const response = await Product.findOne({
               where: {
                    id: req.params.id
               }
          });
          res.json(response)
     } catch (error) {
          res.json(error)
     }
}



export const saveProduct = (req, res) => {
     if(req.files == null) return res.json({msg: "عکسی انتخاب نکردید"})
     const name = req.body.title;
     const file = req.files.file;
     const fileSize = file.data.length;
     const ext = path.extname(file.name)
     let dateNow = Math.round(Date.now());
     const fileName = dateNow + ext;
     const url = `${req.protocol}://${req.get("host")}/images/${fileName}`
     const allowedType = ['.png','.jpg','.jpeg'];

     if(!allowedType.includes(ext.toLowerCase())){
          return res.json({msg: "png jpg jpeg عکس معتبر نیست * فرمت های مجاز "});
     }
     if(fileSize > 5000000) return res.json({msg: "حجم عکس نباید بیشتر از 5 مگابایت باشد."})

     file.mv(`./public/images/${fileName}`, async(err)=> {
          if(err) return res.json({msg: err.message})

          try {
               await Product.create({name: name, image: fileName, url:url});
               res.json({msg: "تصویر با موفقیت افزوده شد."})
          } catch (error) {
               console.log(error.message)
          }
     })

}


export const updateProduct = async(req, res)=> {
     const product = await Product.findOne({
          where: {
               id: req.params.id
          }
     })
     if(!product) return res.json("محصولی پیدا نشد");

     let fileName = "";
     if(req.files === null){
          fileName = product.image;
     }else{
          const file = req.files.file;
          const fileSize = file.data.length;
          const ext = path.extname(file.name)
          let dateNow = Math.round(Date.now());
          fileName = dateNow + ext; 
          const allowedType = ['.png','.jpg','.jpeg'];
          if(!allowedType.includes(ext.toLowerCase())){
               return res.json({msg: "png jpg jpeg عکس معتبر نیست * فرمت های مجاز "});
          }
          if(fileSize > 5000000) return res.json({msg: "حجم عکس نباید بیشتر از 5 مگابایت باشد."})

          const filePath = `./public/images/${product.image}`
          fs.unlinkSync(filePath)

          file.mv(`./public/images/${fileName}`, async(err)=> {
               if(err) return res.json({msg: err.message})
          })
     }

     const name = req.body.title;
     const url = `${req.protocol}://${req.get("host")}/images/${fileName}`

     try {
          await Product.update({name: name, image: fileName, url:url}, {
               where: {
                    id: req.params.id,
               }
          });
          res.json({msg: "محصول با موفقیت ویرایش شد"})
     } catch (error) {
          res.json(error)
     }
}





export const deleteProduct = async(req,res)=> {
     const product = await Product.findOne({
          where: {
               id: req.params.id
          }
     })

     if(!product) return res.json({msg: "محصولی پیدا نشد"});

     try {
          const filePath = `./public/images/${product.image}`
          fs.unlinkSync(filePath)
          await Product.destroy({
               where: {
                    id : req.params.id
               }
          })

          res.json({msg: "محصول با موفقیت حذف شد."})

     } catch (error) {
          res.json(error)
     }

}