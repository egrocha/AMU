import * as React from 'react';
import {useState, useEffect} from 'react';
import { 
	View, 
	FlatList,
	ActivityIndicator,
	Button,
	Vibration,
	Alert,
	Modal,
	StyleSheet,
	Text,
	TouchableHighlight,
	Image,
	NativeModules
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import Date from './Date'
import { BarCodeScanner } from 'expo-barcode-scanner';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker'

import UserImg from './UserImg'
// import Qr_code from './Qr_code'


export default function App() {
	const scriptURL = NativeModules.SourceCode.scriptURL;
	const address = scriptURL.split('://')[1].split('/')[0].split(':')[0];
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [idSpace, setIdSpace] = useState([]);
	// const [num, setNum] = useState(0)
	const [scan, setScan] = useState(false)
	const [result, setResult] = useState()
	const [Qr, setQr] = useState()
	// const [modalVisible, setModalVisible] = useState(false);
  // const [newDate, setNewDate] = useState(dateTime)
  // const [date1, setDate1] = useState({date:"04-06-2020"});
  const [check, setCheck] = useState(new Date(1598051730000));

	
	useEffect(() => {


		fetch('http://'+address+':4007/spaces')
		.then((response) => response.json())
		.then((json) => setData(json))
		.catch((error) => console.error(error))
		.finally(() => setLoading(false));
	}, []);
	
	// function getSpaceId() {
	//   return fetch('http://192.168.1.3:4007/spaces/' + Qr)
	//     .then((response) => response.json())
	//     .then((json) => {
	//       setIdSpace(json)
	//       // return json;
	//     })
	//     .catch((error) => {
	//       console.error(error);
	//     });
  // }
  
  async function checkSpace() {
    try {
      let response = await fetch(
        'http://'+address+':4007/spaces'
      );
      let json = await response.json();
      setCheck(json)
    } catch (error) {
      console.error(error);
		}
		try {
      let response = await fetch(
        'http://'+address+':4007/spaces/' + idSpace._id 
      );
      let json = await response.json();
			setIdSpace(json)
			// {alert(json.reserved)}
    } catch (error) {
      console.error(error);
    }
  }
	
	function getSpaceId() {
		for (let i in data) {
      // alert(data[i]._id)
			if (data[i]._id == Qr) {
				setIdSpace(data[i])
			}
		}
	}
	
	
	// async function getSpaceId() {
	//   try {
	//     let response = await fetch(
	//       'http://192.168.1.3:4007/spaces/' + Qr
	//     );
	//     let json = await response.json();
	//     setIdSpace(json)
	//   } catch (error) {
	//     console.error(error);
	//   }
	// }
	
	function QrCodeScreen({navigation}) {
		const [hasPermission, setHasPermission] = useState(null);
		const [scanned, setScanned] = useState(false);
		
		useEffect(() => {
			(async () => {
				const { status } = await BarCodeScanner.requestPermissionsAsync();
				setHasPermission(status === 'granted');
			})();
		}, []);
		
		// function NavQr(){
		//   Qr ? alert(Qr) : '';
		// }
		
		const handleBarCodeScanned = ({ type, data }) => {
			setScanned(true)
			setQr(data)
			getSpaceId()
			Vibration.vibrate(100);
			navigation.navigate('Reservas')
			
			// setScanned(false)
			// alert(idSpace.name)
			
			// alert(`Bar code with type ${type} and data ${data} has been scanned!`);
			
			return <></>
			
		};
		
		if (hasPermission === null) {
			return <Text>Requesting for camera permission</Text>;
		}
		if (hasPermission === false) {
			return <Text>No access to camera</Text>;
		}
		
		return (
			<View
			style={{
				flex: 1,
		  flexDirection: 'column',
		  justifyContent: 'flex-end',
			}}>
			<BarCodeScanner
			onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
			style={StyleSheet.absoluteFillObject}
			/>
			
			{/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />} */}
			</View>
		);
	}
	
	function HomeScreen() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>PLAZA</Text>
			</View>
		);
	}
	
	function UserScreen(){
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#f6f6f6' }}>
			<UserImg />
			<Text>Nome: John Doe</Text>
			<Text>Nif: 999999999</Text>
			<Text>Telefone: 999999999</Text>
      <Text>Email: johndoe@email.com</Text>
			<View style={{margin: 10, padding: 10, width:210}}>
			<Button title='Editar'/>
			</View>  
			<View style={{margin: 5, padding: 5, width:200}}>
			<Button title='Alterar palavra passe'/>
			</View>
			
			</View>
		)
	}
	
	const styles = StyleSheet.create({
		centeredView: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			marginTop: 10,
			padding: 50
		},
		modalView: {
			margin: 20,
			backgroundColor: "white",
			borderRadius: 20,
			padding: 35,
			alignItems: "center",
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 2
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84,
			elevation: 5
		},
		openButton: {
			backgroundColor: "#20517d",
			borderRadius: 10,
			padding: 10,
			marginHorizontal: 40,
			paddingHorizontal: 100,
			elevation: 2
		},
		openButton1: {
			backgroundColor: "#20517d",
			borderRadius: 10,
      padding: 10,
      marginHorizontal: 40,
			width: 250,
			margin: 10,
			elevation: 2
		},
		openButton2: {
			backgroundColor: "#dfdfdf",
			borderRadius: 10,
      padding: 10,
      marginHorizontal: 40,
			width: 250,
			margin: 10,
			elevation: 2
		},
		textStyle: {
			color: "white",
			fontWeight: "bold",
			textAlign: "center"
		},
		textStyle2: {
			color: "#3f3844",
			fontWeight: "bold",
			textAlign: "center"
		},
		modalText: {
			marginBottom: 15,
			textAlign: "center"
		}
	});
	
	function listaRes() {
		if (idSpace.reserved) {
			return(
				<View>
				<Text>{idSpace.startDate}</Text>
				<Text>{idSpace.endDate}</Text>
				</View>
			)
		} else {
			return (
				<Text>Espaço não reservado</Text>
			)
		}
		
	}
	
	function cancelarRes() {
		fetch('http://'+address+':4007/spaces/' + idSpace._id + '/editar', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      reserved: false
    })
    })
    checkSpace()
	}

	function ReservasScreen({navigation}) {
		return (
			// <View>
			<View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
			
        <View style={{justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize: 25, margin: 10, marginTop: 70}}>{idSpace.name}</Text>
          <Text style={{marginTop: 50}}>Componentes:</Text>
          <FlatList
            data={idSpace.features}
            keyExtractor={({ _id }, index) => _id}
            renderItem={({ item }) => (
					    <Text >{item} </Text>
				)}
				/>
          <Text style={{marginTop: 20}}>Limite de dbs: {idSpace.soundLimit} dB</Text>
          <Text >Ocupação máxima: {idSpace.ocupationLimit} pessoas</Text>

          {/* <Text style={{margin:20}}>Componentes: {idSpace.features}</Text> */}
					{/* {alert(idSpace.reserved)} */}
          <Text style={{justifyContent: 'center', alignItems: 'center', marginBottom: 150}}>
						{idSpace.reserved ? 'Reservado:\n' + idSpace.startDate + '\n' + idSpace.endDate : 'Espaço não reservado'}
					</Text>
        </View>

        <View style={{marginBottom: 100}}>
          <TouchableHighlight
          style={styles.openButton1}
          onPress={() => {
            navigation.navigate('Efetuar Reserva');
          }}
          >
          
          <Text style={styles.textStyle}>Reservar</Text>
          </TouchableHighlight> 
					
					<TouchableHighlight
					disabled={idSpace.reserved ? false : true}
          style={idSpace.reserved ? styles.openButton1 : styles.openButton2}
          onPress={() => {
						alert('Reserva Cancelada')
						cancelarRes();

          }}
          >
          <Text style={idSpace.reserved ?  styles.textStyle : styles.textStyle2}>Cancelar Reserva</Text>
          </TouchableHighlight>

        </View>

			</View>
		);
	}
	
	onSuccess = (e) => {
		setResult(e.data)
		setScan(false)
	}
	
	startScan = () => {
		setScan(true)
		setResult()
	}
	
	function EspacosScreen({navigation}) {
		return(
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<TouchableOpacity activeOpacity={0.7} style={{padding: 30}} onPress={() => navigation.navigate('QR Code')}>
			<View style={{justifyContent: "center", alignItems: "center"}}>
			<MaterialCommunityIcons name="qrcode" size={80} color="black" />
			</View>
			<Text>Scanear o QR code</Text>
			</TouchableOpacity>
			
			<TouchableOpacity activeOpacity={0.7} style={{padding: 30}} onPress={() => navigation.navigate('Lista de Espaços') }>
			<View style={{justifyContent: "center", alignItems: "center"}}>
			<Ionicons name="ios-list" size={85} color="black" />
			</View>
			<Text>Lista de Espaços</Text>
			</TouchableOpacity>
			</View>
		)
  }
  
  function postReserva() {
    fetch('http://'+address+':4007/spaces/' + idSpace._id + '/editar', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      startDate: '10/06/2020 10:10:00',
      endDate: '10/06/2020 15:30:00',
      reserved: true
    })
    })
    checkSpace()
  }
 
	function EfetuarScreen({navigation}) {
    // React.useEffect(
		// 	() => navigation.addListener('blur', () => alert(idSpace.startDate)),
		// 				[]
		// );
		return (
			<View>
				<View style={{justifyContent:'center', paddingTop: 5, flexDirection:'row', alignItems:"center"}}>
					<Text>Início da Reserva</Text>
				</View>
					<Date />
				<View style={{margin: 10}}>
					
				</View>
				<View style={{justifyContent:'center', flexDirection:'row', alignItems:"center"}}>
					<Text>Fim da Reserva</Text>
				</View>
					<Date />
				<TouchableHighlight
					style={styles.openButton}
					onPress={() => {
						postReserva()
						
						// checkSpace()
						// navigation.push('Home');
						Alert.alert(
							"Reserva efetuada",
							"Início: 10/06/2020 10:10\nFim: 10/06/2020 15:30",
							[ { text: "OK"}],	{ cancelable: false }
						);
						{navigation.navigate('Reservas')}

					}}
				>
					<Text style={styles.textStyle}>Confirmar</Text>
				</TouchableHighlight>
			</View>
		)
	}
	
	function EspacosLista({navigation}) {
		return (
			<View style={{ flex: 1, padding: 20, marginHorizontal:10, justifyContent: 'center', alignItems: 'center'  }}>
				{isLoading ? <ActivityIndicator/> : (
					
					<FlatList
					data={data}
					keyExtractor={({ _id }, index) => _id}
					renderItem={({ item }) => (
						<TouchableOpacity activeOpacity={0.7} onPress={() => {setIdSpace(item); navigation.navigate('Reservas');} }>
						<View style={{backgroundColor: 'slategray', justifyContent: 'center', alignItems: 'center', borderRadius:10 , margin: 10, marginHorizontal:10, padding: 10, width: 250}}>
						<Text style={{color: 'white'}}>Nome</Text>
						<Text style={{fontSize: 20,color: 'white'}}>{item.name}</Text>
						{/* <Text style={{color: 'white'}}>Features: {item.features} </Text> */}
						</View>
						</TouchableOpacity>
					)}
					/>
					
				)}
			</View>
		);
	}
	
	const Stack = createStackNavigator();
	const Tab = createBottomTabNavigator();
	
	function MyTabs() {
		return (
			<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					
					if (route.name === 'Home') {
						iconName = focused ? 'md-home' : 'md-home';
					} else if (route.name === 'Espaços') {
						iconName = focused ? 'ios-globe' : 'ios-globe';
					} else if (route.name === 'User') {
						iconName = focused ? 'ios-person' : 'ios-person'
					}
					
					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: '#20517d',
		  inactiveTintColor: 'gray',
			}}
			>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Espaços" component={EspacosScreen} />
			<Tab.Screen name="User" component={UserScreen} />
			</Tab.Navigator>
		);
	}
	
	function MyStack() {
		return (
			<Stack.Navigator>
			<Stack.Screen
			name="Home"
			component={MyTabs}
			options={{
				headerTintColor: 'white',
		  headerStyle: { backgroundColor: '#20517d' },
			}}
			/>
			<Stack.Screen
			name="Reservas"
			component={ReservasScreen}
			/>
			<Stack.Screen
			name="Efetuar Reserva"
			component={EfetuarScreen}
			/>
			<Stack.Screen
			name="Lista de Espaços"
			component={EspacosLista}
			/>
			<Stack.Screen
			name="QR Code"
			component={QrCodeScreen}
			/>
			</Stack.Navigator>
		);
	}
	
	return (
		<NavigationContainer>
		<MyStack />
		</NavigationContainer>
	)
}
