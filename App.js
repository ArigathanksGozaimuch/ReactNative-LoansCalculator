import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ViewShot from 'react-native-view-shot';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // Variabel dari soal yang memiliki nilai awal
      sukuBunga:0.048,
      dp:0.3,
      persenAsuransi:0.05,
      polisAsuransi:0.005,
      biayaPolis:40000,
      admin:700000,
      
      // Variabel input
      harga:0,
      bulan:0,
      hasil:0,

      //Variiabel untuk menghitung rumusan
      hargaMuka:0,
      plafonPinjaman:0,
      biayaAsuransi:0,
      provisi:0,
      pokokBulanan:0,
      bungaBulanan:0,

      // Hasil yang ingin ditampilkan
      cicilanBulanan:0,
      bayaranPertama:0,
     };
  }

  hitung = ()=>{
    // menghitung rumusan
    let menghitungHargaMuka = parseFloat(this.state.harga)*parseFloat(this.state.dp);
    this.setState({hargaMuka:menghitungHargaMuka})
    let menghitungPlafonPinjaman = parseFloat(this.state.harga)-parseFloat(menghitungHargaMuka);
    this.setState({plafonPinjaman:menghitungPlafonPinjaman})
    let menghitungBiayaAsuransi = parseFloat(this.state.harga)*parseFloat(this.state.persenAsuransi);
    this.setState({biayaAsuransi:menghitungBiayaAsuransi})
    let menghitungProvisi = parseFloat(menghitungPlafonPinjaman)*parseFloat(this.state.polisAsuransi);
    this.setState({provisi:menghitungProvisi})
    let menghitungPokokBulanan = parseFloat(menghitungPlafonPinjaman)/parseFloat(this.state.bulan);
    this.setState({pokokBulanan:menghitungPokokBulanan})
    let menghitungBungaBulanan = (parseFloat(menghitungPlafonPinjaman)*parseFloat(this.state.sukuBunga))/12;
    this.setState({bungaBulanan:menghitungBungaBulanan})

    // menghitung hasil
    let menghitungCicilanBulanan = parseFloat(menghitungPokokBulanan)+parseFloat(menghitungBungaBulanan);
    this.setState({cicilanBulanan:menghitungCicilanBulanan})
    let menghitungBayaranPertama = parseFloat(menghitungHargaMuka)+parseFloat(menghitungCicilanBulanan)+parseFloat(menghitungBiayaAsuransi)+parseFloat(menghitungProvisi)+parseFloat(this.state.biayaPolis)+parseFloat(this.state.admin);
    this.setState({bayaranPertama:menghitungBayaranPertama})
  }

  captureAndShareScreenshot = () => {
    this.refs.viewShot.capture().then((uri) => {
      RNFS.readFile(uri, 'base64').then((res) => {
        let urlString = 'data:image/jpeg;base64,' + res;
        let options = {
          title: 'Share Title',
          message: 'Share Message',
          url: urlString,
          type: 'image/jpeg',
        };
        Share.open(options)
      });
    });
  };
  
  render() {
    return (

      
      <View style={{flex:1}}>
        <View style={{
          flex:1,
          zIndex: 100,
          justifyContent:'center',
          alignItems:'center',
          elevation:5,
          backgroundColor:'#7f7cF1',
          }}>

          <Text style={{color:'#ffffff',fontWeight:'bold', fontSize:16}}>VitoKredit | Hitung Pembayaran</Text>
        </View>

        <View style={{
          flex:8,
          justifyContent:'center',
          alignItems:'center',
          elevation:5,
          backgroundColor:'#ffffff',
          }}>

          <Text>Harga Kendaraan:</Text>

        
          <TextInput
            value={this.state.harga}
            style={{
              marginHorizontal:20,
              marginTop:10,
              width:200,
              paddingVertical:10,
              paddingHorizontal:15,
              backgroundColor:'#7f7c82',
              color:'#fff',
              borderRadius:10
            }}
            keyboardType='number-pad'
            onChangeText={(value) => this.setState({harga:value})}
          />
          
          <Text>Jumlah Bulan:</Text>

          <TextInput
            value={this.state.bulan}
            style={{
              marginHorizontal:20,
              marginTop:10,
              width:200,
              paddingVertical:10,
              paddingHorizontal:15,
              backgroundColor:'#7f7c82',
              color:'#fff',
              borderRadius:10
            }}
            keyboardType='number-pad'
            onChangeText={(value) => this.setState({bulan:value})}
          />

            <TouchableOpacity
              onPress={()=> this.hitung()}
              style={{
                backgroundColor:'#8fa2db',
                marginTop:30,
                marginHorizontal:50,
                paddingHorizontal:15,
                paddingVertical:20,
                borderRadius:10
              }}>
              <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>Hitung Pembayaran</Text>
            </TouchableOpacity>

            <View style={{
              marginHorizontal:50,
              marginTop:30,
              justifyContent:'center',
              alignContent:'center',
              paddingVertical:10
            }}>
              <Text style={{textAlign:'center'}}>Pembayaran Pertama:</Text>  
              <Text style={{color:'#0000FF',fontSize:30,textAlign:'center'}}>{this.state.bayaranPertama}</Text>
              <Text style={{textAlign:'center'}}>Cicilan Per Bulan:</Text>
              <Text style={{color:'#0000FF',fontSize:30,textAlign:'center'}}>{this.state.cicilanBulanan}</Text>
            </View>
            
            <ViewShot
            style={{
                backgroundColor:'#8fa2db',
                marginTop:0,
                marginHorizontal:50,
                paddingHorizontal:0,
                paddingVertical:0,
                borderRadius:10
              }}
            ref="viewShot"
            options={{format: 'jpg', quality: 0.9}}>
            <View>
              <TouchableOpacity
                onPress={this.captureAndShareScreenshot}
                style={{
                backgroundColor:'#8fa2db',
                marginTop:0,
                marginHorizontal:50,
                paddingHorizontal:0,
                paddingVertical:0,
                borderRadius:10
              }}>
              <Text style={{color:'#fff',textAlign:'center',fontWeight:'bold'}}>Screenshot dan Share</Text>
              </TouchableOpacity>
            </View>
            </ViewShot>

        </View>
        
      </View>
    );
  }
}

export default App;