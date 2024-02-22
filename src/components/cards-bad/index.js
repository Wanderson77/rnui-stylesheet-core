const Card=()=>(
 <View style={styles.card}>
  <Text>Hello!</Text>
</View>
)
//our style
 const styles=StyleSheer.create({
card:{
width:100,
height:120,
shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0} 
})