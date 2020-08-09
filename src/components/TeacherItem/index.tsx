import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import { RectButton } from 'react-native-gesture-handler'

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Featured-Image-Roger-Smith-Cropped.jpg'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Roger Smith</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                {'\n'}
                Quis suscipit, natus nesciunt dolorem enim et quibusdam ut fuga recusandae id itaque illo eaque velit dicta cumque dolores odio molestias eos.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {' '}
                    <Text style={styles.priceValue}>R$ 20</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem