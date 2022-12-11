import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { 
  MaterialCommunityIcons,
  AntDesign,
  SimpleLineIcons
} from '@expo/vector-icons';

const Layout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}

const Colors = {
  theme: "#24685b",
  white: "#ffffff",
  greyish: "#e4e4e4"
}

const SkillIcons = [
  "language-html5",
  "language-css3",
  "language-javascript",
  "react",
  "bootstrap",
  "code-json",
  "bitbucket",
  "github",
  "jira"
];

const FindMeOn = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rahul-kumar-5ab61816b"
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/rahulmca94"
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/9661028760"
  },
  {
    name: "Pinterest",
    icon: "pinterest",
    link: "https://in.pinterest.com/rahulmca94/"
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/rahul_mca_/"
  },
  {
    name: "Stack Overflow",
    icon: "stack-overflow",
    link: "https://stackoverflow.com/users/10726005/rahul-kumar"
  },
];

const Projects = [
  {
    name: "Next-Generation-NG",
    icon: "react",
    description: ""
  },
  {
    name: "Train-Soft",
    icon: "react",
    description: ""
  },
  {
    name: "Alchemy",
    icon: "react",
    description: ""
  },
  {
    name: "Guntraderz",
    icon: "react",
    description: ""
  }
]

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar 
        translucent={false}
        barStyle="light-content"
        backgroundColor={Colors.theme}
      />
      <View style={{ 
        backgroundColor: Colors.theme,
        paddingBottom: Layout.height * 0.2,
        borderBottomLeftRadius: Layout.width * 0.1,
        borderBottomRightRadius: Layout.width * 0.1,
      }}>
        <View style={{
          alignItems: "flex-end",
          paddingHorizontal: 32,
          marginVertical: 20
        }}>
          <SimpleLineIcons 
            name="equalizer"
            size={20}
            style={{ color: Colors.white}}
          />
        </View>
        <View style={{
          flexDirection: "row",
          paddingHorizontal: 32,
          marginVertical: 36,
          alignItems: "center",
          justifyContent: "flex-start",
        }}>
          <Image 
            source={require('./assets/profile.jpg')}
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 15 }}
          />
          <View>
            <Text 
              style={{ 
                fontSize: 20,
                color: Colors.white
              }}
            >Rahul Kumar</Text>
            <Text style={{ color: Colors.greyish}}>UI Developer | React Developer</Text>
          </View>
        </View>
      </View>

      <View style={{
        backgroundColor: Colors.white,
        marginHorizontal: 32,
        padding: 20,
        elevation: 8,
        marginBottom: 16,
        marginTop: -Layout.height * 0.15,
        borderRadius: 20
      }}>
        <View style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-between'
        }}>
          <Text>Bio</Text>
          <AntDesign name="user" size={20} />
        </View>
        <View>
          <Text style={{color: Colors.greyish}} >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>

      <View style={{
        backgroundColor: Colors.white,
        marginHorizontal: 32,
        padding: 20,
        elevation: 8,
        marginBottom: 16,
        // marginTop: -Layout.height * 0.15,
        borderRadius: 20
      }}>
        <View style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-between'
        }}>
          <Text>Skills</Text>
          <MaterialCommunityIcons name="pen" size={20} />
        </View>
        <ScrollView horizontal style={{ marginVertical: 8 }}>
          {
            SkillIcons.map(skill => <View
              key={skill}
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                borderWidth: 2,
                borderColor: Colors.theme,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10
              }}
            >
              <MaterialCommunityIcons 
                name={skill} 
                size={30} 
                style={{color: Colors.theme}}
              />
              </View>)
          }
        </ScrollView>
      </View>

      <ScrollView horizontal>
          {
            Projects.map(project => <View
              key={project.name}
              style={{
                backgroundColor: Colors.theme,
                marginHorizontal: 8,
                padding: 20,
                borderRadius: 16,
                marginBottom: 16,
                alignItems: 'center',
                width: Layout.width * 0.7,

              }}
            >
              <Text style={{ fontSize: 20, color: Colors.white}}>{project.name}</Text>
              <MaterialCommunityIcons 
                name={project.icon} 
                size={150}
                style={{color: Colors.white,
                marginVertical: 40
              }}
              />
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 20,
                    paddingVertical: 10
                  }}
                >
                  <Text style={{color: Colors.theme}}>View Project</Text>
                </View>
              </TouchableOpacity>
            </View>)
          }
      </ScrollView>

      <View style={{
        backgroundColor: Colors.white,
        marginHorizontal: 32,
        padding: 20,
        elevation: 8,
        marginBottom: 16,
        // marginTop: -Layout.height * 0.15,
        borderRadius: 20
      }}>
        <View style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-between'
        }}>
          <Text>Stats</Text>
          <MaterialCommunityIcons name="trending-up" size={20} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
            alignItems: 'flex-end',
          }}
        >
          <Text style={{fontSize: 50, color: Colors.theme}}>50000</Text>
          <Text style={{color: Colors.greyish}}>Line of code</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
            alignItems: 'flex-end',
          }}
        >
          <Text style={{color: Colors.greyish}}>Project completed</Text>
          <Text style={{fontSize: 50, color: Colors.theme}}>400</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
            alignItems: 'flex-end',
          }}
        >
          <Text style={{fontSize: 50, color: Colors.theme}}>150</Text>
          <Text style={{color: Colors.greyish}}>Happy Clients</Text>
        </View>
      </View>

      <View style={{
        backgroundColor: Colors.white,
        marginHorizontal: 32,
        padding: 20,
        elevation: 8,
        marginBottom: 16,
        borderRadius: 20
      }}>
        <View style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-between'
        }}>
          <Text>Find Me</Text>
        </View>
        <ScrollView horizontal style={{ marginVertical: 8 }}>
          {
            FindMeOn.map(res => <View
              key={res.name}
              style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                borderWidth: 2,
                borderColor: Colors.theme,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10
              }}
            >
              <MaterialCommunityIcons 
                name={res.icon} 
                size={30} 
                style={{color: Colors.theme}}
              onPress={() => Linking.openURL(res.link)}
              />
              </View>)
          }
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
