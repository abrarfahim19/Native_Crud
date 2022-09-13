import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import {Context} from '../context/BlogContext'

const IndexScreen = () => {
    const {state,addBlogPost} = useContext(Context);
    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={state}
                keyExtractor={(item)=>item.title}
                renderItem={({item})=><Text>{item.title}</Text>}
            />
            <Button
                title='Add Blog'
                onPress={addBlogPost}
            />
        </View>
  );
};

export default IndexScreen

const styles = StyleSheet.create({})