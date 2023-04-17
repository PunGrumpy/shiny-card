import React, { useState, useRef, MouseEvent } from 'react'
import {
  Card,
  CoverImage,
  CardContent,
  Title,
  Divider,
  Subtitle,
  Text,
  Author,
  Avatar,
  AuthorName,
  Container
} from './components/Card'

const coverImage = 'https://via.placeholder.com/360x320'
const avatarImage = 'https://via.placeholder.com/100x100'

function App(): JSX.Element {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)
  const cardRef = useRef<HTMLDivElement>(null)
  const [gradientAngle, setGradientAngle] = useState(0)
  const [shinePosition, setShinePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setRotateX(-y / 20)
    setRotateY(x / 20)

    const angle = Math.atan2(y, x) * (180 / Math.PI)
    setGradientAngle(angle)

    const shineX = e.clientX - rect.left
    const shineY = e.clientY - rect.top
    setShinePosition({ x: shineX, y: shineY })
  }

  const handleMouseEnter = (): void => {
    setScale(1.05)
  }

  const handleMouseLeave = (): void => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  return (
    <Container>
      <Card
        ref={cardRef}
        rotateX={rotateX}
        rotateY={rotateY}
        scale={scale}
        gradientAngle={gradientAngle}
        shinePosition={shinePosition}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CoverImage
          src={coverImage}
          alt="Cover"
          gradientAngle={gradientAngle}
        />
        <CardContent>
          <Title>Noppakorn Kaewsalabnil</Title>
          <Divider gradientAngle={gradientAngle} />
          <Subtitle>Undergraduate student</Subtitle>
          <Text>
            I am currently studying computer science at KMITL in Thailand, and
            my interests revolve around DevOps, Cybersecurity, and Web
            Development.
          </Text>
          <Author>
            <Avatar
              src={avatarImage}
              alt="Author Avatar"
              gradientAngle={gradientAngle}
            />
            <AuthorName>Made by PunGrumpy</AuthorName>
          </Author>
        </CardContent>
      </Card>
    </Container>
  )
}

export default App
