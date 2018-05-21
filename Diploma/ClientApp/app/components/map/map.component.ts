import { Component, OnInit, ViewChild } from '@angular/core';
import { MapService } from '../../services/map/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  providers: [MapService],
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'Визуализация данных об уровне загрязнения воздуха';
  centerLat: number = 54.70916675;
  centerLng: number = 20.5206741;

  positions: any[] = [];
  icon: any;

  data: string = `[{"lat":54.67925138517005,"lng":20.60101395274544,"aqi":96,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.727197117484955,"lng":20.56688062345309,"aqi":57,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.700128434920686,"lng":20.71121457375508,"aqi":106,"color":"rgb(253, 126, 16)","textColor":"#fff"},{"lat":54.729452878775625,"lng":20.33394042322585,"aqi":142,"color":"rgb(253, 126, 16)","textColor":"#fff"},{"lat":54.73697788247268,"lng":20.348716484014897,"aqi":59,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.68328009049341,"lng":20.438799662194782,"aqi":144,"color":"rgb(253, 126, 16)","textColor":"#fff"},{"lat":54.673570556161046,"lng":20.566261202112816,"aqi":115,"color":"rgb(253, 126, 16)","textColor":"#fff"},{"lat":54.754207260749,"lng":20.47269125756063,"aqi":124,"color":"rgb(253, 126, 16)","textColor":"#fff"},{"lat":54.743586667240656,"lng":20.59150258461455,"aqi":32,"color":"rgb(19, 181, 69)","textColor":"#fff"},{"lat":54.71717867375742,"lng":20.66262647529504,"aqi":89,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.73230922183056,"lng":20.447396943291942,"aqi":55,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.7256994161109,"lng":20.542370020703125,"aqi":119,"color":"rgb(253, 126, 16)","textColor":"#fff"},{"lat":54.727129169876726,"lng":20.58118129438138,"aqi":66,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.76190526341326,"lng":20.4844658029645,"aqi":88,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.71844975901396,"lng":20.328334126632573,"aqi":117,"color":"rgb(253, 126, 16)","textColor":"#fff"},{"lat":54.65769403535927,"lng":20.576960609082676,"aqi":88,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.71328809875249,"lng":20.587082019864383,"aqi":91,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.73866424705666,"lng":20.458193159338197,"aqi":139,"color":"rgb(253, 126, 16)","textColor":"#fff"},{"lat":54.74732692609342,"lng":20.447725129179034,"aqi":54,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.70519815592379,"lng":20.700260742265833,"aqi":86,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.73567426660804,"lng":20.508092291942713,"aqi":135,"color":"rgb(253, 126, 16)","textColor":"#fff"},{"lat":54.73572335139214,"lng":20.564855396674144,"aqi":80,"color":"rgb(255, 248, 33)","textColor":"#000"},{"lat":54.742235176135324,"lng":20.57209052709732,"aqi":122,"color":"rgb(253, 126, 16)","textColor":"#fff"},{"lat":54.66138504318874,"lng":20.55798293936168,"aqi":50,"color":"rgb(19, 181, 69)","textColor":"#fff"},{"lat":54.72584216061185,"lng":20.684568332838374,"aqi":32,"color":"rgb(19, 181, 69)","textColor":"#fff"},{"lat":54.7258787938226,"lng":20.59414897683125,"aqi":31,"color":"rgb(19, 181, 69)","textColor":"#fff"},{"lat":54.70865457407004,"lng":20.557619303522113,"aqi":32,"color":"rgb(19, 181, 69)","textColor":"#fff"},{"lat":54.736173164187875,"lng":20.477202022947807,"aqi":30,"color":"rgb(19, 181, 69)","textColor":"#fff"},{"lat":54.68562280327747,"lng":20.39821590587841,"aqi":106,"color":"rgb(253, 126, 16)","textColor":"#fff"},{"lat":54.711370752661466,"lng":20.431143902583884,"aqi":132,"color":"rgb(253, 126, 16)","textColor":"#fff"}]`;

  constructor(private mapService: MapService) {
    this.mapService = mapService;
  }

  ngOnInit(): void {
    // this.positions = this.mapService.generateRandomPoints({ 'lat': 54.70916675, 'lng': 20.5206741 }, 6 * 1000, 30);
    // this.positions.forEach(item => {
    //   item.aqi = this.randomInt(20, 150);
    //   item.color = this.getColorByAqi(item.aqi);
    //   item.textColor = this.getTextColorByAqi(item.aqi);
    // });
    // console.log(JSON.stringify(this.positions));
    this.positions = JSON.parse(this.data);
    this.positions.forEach(item => {
      this.setPollutionsInfoByPosition(item);
      item.description = this.getDescriptionByAqi(item.aqi);
    });
  }

  randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getColorByAqi(aqi: number) {
    if (aqi <= 50) return 'rgb(19, 181, 69)';
    if (aqi > 50 && aqi <= 100) return 'rgb(255, 248, 33)';
    if (aqi > 100 && aqi <= 180) return 'rgb(253, 126, 16)';
  }

  getTextColorByAqi(aqi: number) {
    if (aqi <= 50) return '#fff';
    if (aqi > 50 && aqi <= 100) return '#000';
    if (aqi > 100 && aqi <= 180) return '#fff';
  }

  setPollutionsInfoByPosition(position: any) {
    let o3 = position.aqi;
    let no2 = this.randomInt(10, position.aqi);
    let so2 = this.randomInt(10, position.aqi);
    let co = this.randomInt(10, position.aqi);

    position.pollutions = [];
    position.pollutions.push({
      name: "O3",
      aqi: o3,
      aqiBackgroundColor: this.getColorByAqi(o3)
    },
      {
        name: "NO2",
        aqi: no2,
        aqiBackgroundColor: this.getColorByAqi(no2)
      },
      {
        name: "SO2",
        aqi: so2,
        aqiBackgroundColor: this.getColorByAqi(so2)
      },
      {
        name: "CO",
        aqi: co,
        aqiBackgroundColor: this.getColorByAqi(co)
      });
  }

  getDescriptionByAqi(aqi: number) {
    if (aqi <= 50)
      return 'Качество воздуха удовлетворительно, загрязнение воздуха не представляет риска';
    if (aqi > 50 && aqi <= 100)
      return 'Качество воздуха приемлемо, но для малого процента людей, кто чувствителен к загрязнению воздуха, могут возникнуть неудобства';
    if (aqi > 100 && aqi <= 180)
      return 'Качество воздуха неприемлемо для чувствительных групп, широкая общественность не будет затронута';
  }
}
