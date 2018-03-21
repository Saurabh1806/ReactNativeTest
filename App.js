
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';

import { LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import BackIcon from "./images/backarrow.png";
import downloadIcon from "./images/downloadimg.png";
import UberImg from "./images/uberimgsec.png";
import * as shape from 'd3-shape'
import { Circle } from 'react-native-svg'

const Data = [
  {
    image: UberImg,
    name: 'Uber',
    month: "2 Mar 18",
    Amount: "₹40"

  },
  {
    image: UberImg,
    name: 'Uber',
    month: "26 Mar 18",
    Amount: "₹40"
  },
  {
    image: UberImg,
    name: 'Uber',
    month: "2 Mar 18",
    Amount: "₹40"
  },
  {
    image: UberImg,
    name: 'Uber',
    month: "2 Mar 18",
    Amount: "₹40"
  },
  {
    image: UberImg,
    name: 'Uber',
    month: "2 Mar 18",
    Amount: "₹40"

  },
  {
    image: UberImg,
    name: 'Uber',
    month: "2 Mar 18",
    Amount: "₹40"
  },
  {
    image: UberImg,
    name: 'Uber',
    month: "2 Mar 18",
    Amount: "₹40"
  },
  {
    image: UberImg,
    name: 'Uber',
    month: "2 Mar 18",
    Amount: "₹40"
  },
  {
    image: UberImg,
    name: 'Uber',
    month: "2 Mar 18",
    Amount: "₹40"

  }
]





export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalAmount: "4,172",
      spendsLabel: "Spends",
      uberLabel: "On Uber"
    };
  }



  _uberListRenderRow(item, index) {
    return (
      <View style={styles.flatListRow}>
        <Image style={styles.listImageIcon} source={item.image} />
        <View style={styles.LabView}>
          <Text style={styles.listNameLab}>{item.name}</Text>
        </View>
        <View style={styles.LabView}>
          <Text style={styles.monthName}>{item.month}</Text>
        </View>

        <View style={styles.LabView}>
          <Text style={styles.priceLab}>{item.Amount}</Text>
        </View>
      </View>
    )
  }

  
  render() {

    const data = [400, 750, 1874, 1930]

    const monthName = ["Nov 17", "Dec 17", "Jan 18", "Feb 18"]

    return (
      <View style={styles.container}>
        <View style={styles.topViewStyle} >
          <View style={styles.topImgViewStyle}>
            <Image style={styles.backIconStyle} source={BackIcon} />
            <Image style={styles.downloadIconStyle} source={downloadIcon} />
          </View>
          <Text style={styles.instructions}>
            {this.state.spendsLabel}
          </Text>
          <View style={styles.topImgViewStyle}>
            <Text style={styles.onUberTextStyle}>
              {this.state.uberLabel}
            </Text>
            <Text style={styles.totalAmtTextStyle}>
              {"₹"} {this.state.totalAmount}
            </Text>
          </View>
        </View>
        <View style={styles.mainViewStyle}>
          <View style={styles.GraphViewStyle}>
            <LineChart
              style={{ height: 100, width: "80%" }}
              svg={{ stroke: "#03A87C", strokeWidth: 2, }}
              contentInset={{ top: 20, bottom: 20, left: 20, right: 20 }}
              showGrid={false}
              data={data}
              curve={shape.curveLinear}
              renderDecorator={({ x, y, index, value }) => (
                <Circle
                  key={index}
                  cx={x(index)}
                  cy={y(value)}
                  r={4}
                  stroke={ "#03A87C"}
                  fill={'white'}
                />
              )}
            />
            <XAxis
              style={{ marginHorizontal: -10, width: "80%" }}
              data={data}
              contentInset={{ left: 20, right: 20 }}
              svg={{ fontSize: 10 }}
              formatLabel={(_, index) => monthName[index]}
            />
          </View>
          <FlatList
            style={styles.ListViewStyle}
            data={Data}
            renderItem={({ item, index }) => this._uberListRenderRow(item, index)}
            keyExtractor={(item, index) => index.toString()}

          />

        </View>

      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topViewStyle: {
    top: Platform.OS == "ios" ? 20 : 0,
    flex: 1.2,
    backgroundColor: '#FFFFFF',
  },
  topImgViewStyle: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainViewStyle: {
    flex: 4,
    backgroundColor: "#F5F5F5"
  },

  backIconStyle: {
    marginLeft: 5
  },
  downloadIconStyle: {
    marginRight: 5
  },
  instructions: {
    color: '#333333',
    fontSize: 24,
    marginLeft: 15,
    fontWeight: "bold"
  },
  onUberTextStyle: {
    color: '#333333',
    fontSize: 16,
    margin: 15,
  },
  totalAmtTextStyle: {
    color: '#333333',
    fontSize: 25,
    marginRight: 15,
    fontWeight: "bold"
  },
  GraphViewStyle: {
    margin: 15,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  ListViewStyle: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15,
    height: 500,
    backgroundColor: '#FFFFFF',
    paddingTop: 10
  },
  flatListRow: {
    height: 60,
    backgroundColor: "#FFFFFF",
    flexDirection: 'row',
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#F5F5F5"

  },
  listImageIcon: {
    marginLeft: 15,
    alignSelf: 'center'
  },
  LabView: {
    width: "30%",
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: "center",

  },
  listNameLab: {
    color: "#434343",
    fontSize: 14,

    marginRight: 25,
  },
  monthName: {
    color: "gray",
    fontSize: 14,

    marginRight: 20,
  },
  priceLab: {
    marginRight: 30,
    fontSize: 14,
    color: "#434343"
  }
});


