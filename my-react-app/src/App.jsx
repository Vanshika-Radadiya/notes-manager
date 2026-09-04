import ProfileCard from './ProfileCard'
import './App.css'

function App() {
  const profiles = [
    {
      id: 1,
      name: 'Aarav Sharma',
      role: 'Frontend Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300',
      description:
        'Passionate about building scalable web applications using the MERN stack.',
    },
    {
      id: 2,
      name: 'Priya Patil',
      role: 'Backend Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300',
      description:
        'Specializes in creating accessible, user-friendly digital experiences.',
    },
     {
    id: 3,
    name: 'Nisha Verma',
    role: 'MERN stack Developer',
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300',
    description:
      'Enjoys creating responsive and interactive websites using React.',
  },
   
  ]

  return (
    <div className="app">
      <h1 className='header'>SY MCA Student Profiles</h1>

      <div className="profiles-container">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            role={profile.role}
            imageUrl={profile.imageUrl}
            description={profile.description}
          />
        ))}
      </div>
      <footer className="watermark">
      Vanshika Radadiya | 1272250271
    </footer>
    </div>
  )
}

export default App