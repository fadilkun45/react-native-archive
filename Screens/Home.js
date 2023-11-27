import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Card, MD3Colors, Modal, PaperProvider, Portal, ProgressBar, Provider, Searchbar, Text } from 'react-native-paper'
import { fetchAll } from '../services/fetchData'
import { FlatList } from 'react-native'

const Home = ({navigation}) => {
    const [search, setSearch] = useState('')
    const { data, isLoading } = fetchAll()
    const [newData, setNewData] = useState()
    const [modal, setModal] = React.useState(false);

    useEffect(() => {
        data?.map((x) => {
            x.name2 = x.name.common
        })
        setNewData(data)
    }, [data])

    const onChangeSearch = (evt) => {
        setSearch(evt)
        setNewData(data?.filter((x) => x.name2.toLowerCase().includes(evt.toLowerCase())))

    }



    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const onPressDetail = (evt) => {
        if(evt.name.common === "Israel"){
            setModal(true)
            return
        }

        navigation.push('Detail', {
            params: evt
        })
    }

    return (
        <>

            <PaperProvider>
                <Portal>
                    <Modal  visible={modal} onDismiss={() => setModal(false)} contentContainerStyle={containerStyle}>
                        <Text style={{  textAlign: "center", paddingVertical: 20, color: "#303030" }} variant='titleLarge' >
                        {`Negara tidak ditemukan, maksud mu palestina ? \n\n\n\n  #Freepalestine\n#ceasefirenow`}
                        </Text>
                    </Modal>
                </Portal>
                <SafeAreaView style={{ width: "100%", display: "flex", alignItems: "center", color: "#303030" }}>
                    <View style={{ width: "90%", }}>
                        <Text variant="titleLarge" style={{ textAlign: "center", display: "flex", marginVertical: 13,color: "#303030" }}>List Negara</Text>
                        <Searchbar
                            style={{ backgroundColor: "white", color: "#303030"  }}
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={search}
                        />

                        {
                            newData?.length === 0 ? <Text style={{ textAlign: "center", marginTop: 40,  color: "#303030"  }}  variant='displayMedium'>Data tidak ditemukan</Text> : <FlatList
                                style={{ marginTop: 14, marginBottom: 300, display: "flex" }}
                                data={newData}
                                removeClippedSubviews
                                keyExtractor={({ item, index }) => index}
                                renderItem={({ item, index }) => <Card style={{ marginBottom: 23, backgroundColor: "white" }} onPress={() => onPressDetail(item)}>
                                    <Card.Title title={item?.name?.common} titleVariant="headlineSmall" titleStyle={{ color: "#303030" }} />
                                    <Card.Cover style={{padding: 10,  color: "#303030" }} source={{ uri: item?.flags?.png }} />
                                </Card>
                                }
                            />
                        }
                    </View>
                </SafeAreaView>
            </PaperProvider>



        </>
    )
}



export default Home