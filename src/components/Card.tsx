import React from 'react'
import styled from 'styled-components'

const coverImage = 'https://via.placeholder.com/360x320'
const avatarImage = 'https://via.placeholder.com/100x100'
const backgroundImage = 'https://via.placeholder.com/360x640'

interface CardProps {
  rotateX: number
  rotateY: number
  scale: number
  gradientAngle: number
  shinePosition: { x: number; y: number }
  slot?: string
  style?: React.CSSProperties
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type ImageProps = {
  src: string
  alt: string
  gradientAngle: number
}

type DividerProps = {
  gradientAngle: number
}

const Card = styled.div<CardProps>`
  width: 360px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.1), 0px 30px 60px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
  padding: 20px;
  transform: ${({ rotateX, rotateY, scale }) =>
    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`};
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ gradientAngle }) =>
      `linear-gradient(${gradientAngle}deg, rgba(255,255,255, 0.1) 0%, rgba(255,255,255, 0.7) 50%, rgba(0, 0, 0, 0.5) 100%)`};
    border-radius: 10px;
    padding: 1px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ shinePosition }) =>
      `radial-gradient(circle at ${shinePosition.x}px ${shinePosition.y}px, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 40%)`};
  }
`

const CoverImage = styled.div<ImageProps>`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 10px;
  position: relative;
  background-image: url(${coverImage});
  background-size: 100%;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ gradientAngle }) =>
      `linear-gradient(${gradientAngle}deg, rgba(255,255,255, 0.1) 0%, rgba(255,255,255, 0.7) 50%, rgba(0, 0, 0, 0.5) 100%)`};
    border-radius: 10px;
    padding: 1px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

const CardContent = styled.div`
  padding-top: 20px;
`

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 590;
  line-height: 20px;
  color: #ffffff;
`

const Divider = styled.hr<DividerProps>`
  border: none;
  height: 1px;
  background: ${({ gradientAngle }) =>
    `linear-gradient(90deg, rgba(255,255,255, 0.5) ${gradientAngle}%, rgba(255,255,255, 0) 100%)`};
  margin: 20px 0;
`

const Subtitle = styled.h3`
  font-style: normal;
  font-weight: 510;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 8px;
`

const Text = styled.p`
  margin: 0 0 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  /* or 185% */
  color: rgba(255, 255, 255, 0.7);
`

const Author = styled.div`
  display: flex;
  align-items: center;
`

const Avatar = styled.div<ImageProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 8px;
  position: relative;
  background-image: url(${avatarImage});
  background-size: 100%;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ gradientAngle }) =>
      `linear-gradient(${gradientAngle}deg, rgba(255,255,255, 0.1) 0%, rgba(255,255,255, 0.7) 50%, rgba(0, 0, 0, 0.5) 100%)`};
    border-radius: 50%;
    padding: 1px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

const AuthorName = styled.span`
  font-style: normal;
  font-weight: 510;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */
  color: rgba(255, 255, 255, 0.8);
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #333;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export {
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
}
