import React,{useState} from 'react';
import Input from "./components/Input"
import Form from "./components/Form"
import Button from "./components/Button"
import './App.css';

function App() {

const inputDatas = [
    {
    "inputs":[
    {  
      "label":"Fiyatını girin",
      "value":0,
      "name":"fiyat"
    },
    {  
      "label":"Kar Oranı Girin",
      "value":0,
      "name":"karOrani",
    }
    ]
    ,
    "sonuc":[
      {
        "label":"Satış Fiyatı",
        "name":"satisFiyati",
        "cevap":0,
        "hesapla":function(i){
          this.cevap=inputDatas[i].inputs[0].value * inputDatas[i].inputs[1].value

        }
      }
    ]
  },


  {
    "inputs":[
    {  
      "label":"Kısa Kenar",
      "value":0,
      "name":"kisaKenar"
    },
    {  
      "label":"Uzun Kenar",
      "value":0,
      "name":"uzunKenar",
    }
    ]
    ,
    "sonuc":[
      {
        "label":"Çevre",
        "name":"cevre",
        "cevap":0,
        "hesapla":function(i){
          this.cevap=2*(parseFloat(inputDatas[i].inputs[0].value) + parseFloat(inputDatas[i].inputs[1].value))

        }
      },
      {
        "label":"Alan",
        "name":"alan",
        "cevap":0,
        "hesapla":function(i){
          this.cevap=parseFloat(inputDatas[i].inputs[0].value) * parseFloat(inputDatas[i].inputs[1].value)

        }
      }
    ]
  },

  {
    "inputs":[
    {  
      "label":"Birin Fiyat",
      "value":0,
      "name":"birimFiyat"
    },
    {  
      "label":"Adet",
      "value":0,
      "name":"adet",
    }
    ]
    ,
    "sonuc":[
      {
        "label":"Toplam Tutar",
        "name":"tutar",
        "cevap":0,
        "hesapla":function(i){
          this.cevap=parseFloat(inputDatas[i].inputs[0].value) * parseFloat(inputDatas[i].inputs[1].value)

        }
      },
    ]
  },

  {
    "inputs":[
    {  
      "label":"Sayı",
      "value":0,
      "name":"sayi"
    },
    
    ]
    ,
    "sonuc":[
      {
        "label":"Karesi",
        "name":"kare",
        "cevap":0,
        "hesapla":function(i){
          this.cevap=parseFloat(inputDatas[i].inputs[0].value) * parseFloat(inputDatas[i].inputs[0].value)

        }
      },
    ]
  },
  {
    "inputs":[
    {  
      "label":"X",
      "value":0,
      "name":"x"
    },
    {  
      "label":"Y",
      "value":0,
      "name":"y",
    }
    ]
    ,
    "sonuc":[
      {
        "label":"İki Kare Farkı",
        "name":"fark",
        "cevap":0,
        "hesapla":function(i){
          this.cevap=(parseFloat(inputDatas[i].inputs[0].value) * parseFloat(inputDatas[i].inputs[0].value)) - (parseFloat(inputDatas[i].inputs[1].value) * parseFloat(inputDatas[i].inputs[1].value))

        }
      },
    ]
  },
  {
    "inputs":[
    {  
      "label":"a",
      "value":0,
      "name":"a"
    },
    {  
      "label":"b",
      "value":0,
      "name":"b",
    },
    {  
      "label":"c",
      "value":0,
      "name":"c",
    }
    ]
    ,
    "sonuc":[
      {
        "label":"2b - 4ac",
        "name":"sonuc",
        "cevap":0,
        "hesapla":function(i){
          this.cevap=2*parseFloat(inputDatas[i].inputs[1].value) - 4*parseFloat(inputDatas[i].inputs[0].value)*parseFloat(inputDatas[i].inputs[2].value)
        }
      },
    ]
  },
  {
    "inputs":[
    {  
      "label":"Doğum Yılı",
      "value":0,
      "name":"dogumTarihi"
    },
    
    ]
    ,
    "sonuc":[
      {
        "label":"",
        "name":"sonuc",
        "cevap":"",
        "hesapla":function(i){
     
          if(2023-(parseFloat(inputDatas[i].inputs[0].value))>17){
            this.cevap="Ehliyet alabilir"
          }else{
            this.cevap = "Ehliyet alamaz"
          }

        }
      },
    ]
  },
  
  
]

  const [data,setData] = useState(inputDatas);


  function changeData(i,t,v){
    setData(prev=>{
      prev[i].inputs[t].value=v
      return [
        ...prev
      ]
    })
  }

  function sonucHesapla(i){
    setData(prev=>{
      for (const input of  prev[i].inputs) {
        if (parseFloat(input.value)===0) {
           alert("Lütfen Geçerli Bir Değer Girin")
        }
      }    
      prev[i].sonuc.forEach(element => {
        element.hesapla(i)
      })
         return [
        ...prev
      ]
    })
  }
  return (
  
    <div className="App">

      {
        
        data.map((inputData,index)=>{
          return (
            <div key={index}>
              <Form data={inputData}>
             {    
              
                inputData.inputs.map((input,t)=>{

                    return <React.Fragment key={t}>
                     
                      <Input handleChange={(val)=>changeData(index,t,val)} deger={parseFloat(input.value)} isEnable={true}>
                      <label>{input.label}</label>
                      </Input>
                    </React.Fragment>
                })}
                     
                 <Button  handleClick = {()=>sonucHesapla(index)} data={inputData}>hesapla</Button>
                </Form>
                {
                
                inputData.sonuc.map((s,index)=>{
                  return  <Input  key={index} deger={s.cevap} isEnable={false}>
                  <label>{s.label}</label>
                  </Input>
                })
                
                }
               
            </div>
          )
        })
      }
 
    </div>
  );
}

export default App;
