const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors

const app = express() //implementasi express

//implementasi body-parser
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())


// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))


// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

app.get("/hitung/:satuan/:data", (req, res) => {
    const satuan = req.params.satuan;
    const data = req.params.data;
    let result;
    const results = {};
    const sp = {
      kg: 1,
      hg: 10,
      dag: 100,
      g: 1000,
      dg: 1000,
      cg: 10000,
      mg: 100000
    };  

    if (satuan == "kg") {
        result = data / 1000000;
      }
      else if (satuan == "hg") {
        result = data / 100000;
      }
      else if (satuan == "dag") {
        result = data / 10000;
      }
      else if (satuan == "g") {
        result = data / 1000;
      }
      else if (satuan == "dg") {
        result = data / 100;
      }
      else if (satuan == "cg") {
        result = data / 10;
      }
      else{
        result = data
      }
    
      for (const p in sp) {
        results[p] = result * sp[p];
      }
      let response = {
        status: res.statusCode,
        hasil: results
      };
    
      res.json(response);
    });

app.get("/berat/:nilai", (req,res) => 
{
    let tipe_berat = req.params.tipe_berat
    let berat = Number(req.params.berat)
    let nilai = berat
    let response
    let kg,hg,dag,g,dg,cg,mg

    if (tipe_berat === "mg") 
    {
        mg = berat
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi MG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "cg")
    {
        mg = berat / 10
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi CG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "dg")
    {
        mg = berat / 100
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi DG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "g")
    {
        mg = berat / 1000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi G",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "dag")
    {
        mg = berat / 10000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi DAG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "hg")
    {
        mg = berat / 100000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi HG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    else if(tipe_berat === "kg")
    {
        mg = berat / 1000000
        cg = mg * 10
        dg = cg * 10
        g = dg * 10
        dag = g * 10
        hg = dag * 10
        kg = hg * 10
        response = {
            Soal: "Konversi KG",
            mg: mg,
            cg: cg,
            dg: dg,
            g: g,
            dag: dag,
            hg: hg,
            kg: kg
        }
    }
    res.json(response)
})




// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})