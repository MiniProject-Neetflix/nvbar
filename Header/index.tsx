import React, { useEffect, useState } from 'react'
import { Col, Button, Row } from 'antd'
import Text from '@nexys/components/Typography/Text'
import Image from 'next/image'
import Link from 'next/link'
import BaseHeader, {
  BaseHeaderProps,
} from '@nexys/components/BaseHeader/BaseHeader'

function Header(props: BaseHeaderProps) {
  const [scrolls, setScrolls] = useState(false)

  const styleButton = scrolls
    ? {
        borderRadius: '100px',
        background: 'rgba(0,0,0,0)',
        width: '168px',
        height: '50px',
        color: 'red',
        border: '1px solid red',
      }
    : {
        borderRadius: '100px',
        background: 'rgba(0,0,0,0)',
        width: '168px',
        height: '50px',
        color: 'white',
        border: '1px solid white',
      }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 10) {
        setScrolls(true)
      } else {
        setScrolls(false)
      }
    })
  }, [])

  return (
    <BaseHeader
      {...props}
      style={scrolls ? { background: 'white' } : { background: '#ff5b0300' }}
    >
      <Row style={{ paddingLeft: '140px' }}>
        <Col>
          <Link href={'/'}>
            <a>
              {scrolls ? (
                <Image
                  width={150}
                  height={47}
                  src={'/static/images/logo/logoOrangeBlack.svg'}
                  alt={'illustration'}
                />
              ) : (
                <Image
                  width={150}
                  height={47}
                  src={'/static/images/logo/logo.svg'}
                  alt={'illustration'}
                />
              )}
            </a>
          </Link>
        </Col>
      </Row>

      <Row
        style={{
          width: '53%',
          display: 'flex',
          alignItems: 'center',
          paddingRight: '140px',
        }}
      >
        <Col flex={'auto'} style={{ textAlign: 'end' }}>
          <Link href={'/program'}>
            <a>
              <Text fontFamily={'bold'} color={scrolls ? 'black' : 'white'}>
                Program
              </Text>
            </a>
          </Link>
        </Col>
        <Col flex={'auto'} style={{ textAlign: 'end' }}>
          <Link href={'#contributors'}>
            <a>
              <Text fontFamily={'bold'} color={scrolls ? 'black' : 'white'}>
                Artikel
              </Text>
            </a>
          </Link>
        </Col>
        <Col flex={'auto'} style={{ textAlign: 'end' }}>
          <Link href={'#contributors'}>
            <a>
              <Text fontFamily={'bold'} color={scrolls ? 'black' : 'white'}>
                Tentang kami
              </Text>
            </a>
          </Link>
        </Col>

        <Col flex={'auto'} style={{ textAlign: 'end' }}>
          <Link href={'#contributors'}>
            <a>
              <Button style={styleButton}>
                <Text fontFamily={'bold'}>Hubungi kami</Text>
              </Button>
            </a>
          </Link>
        </Col>
      </Row>
    </BaseHeader>
  )
}

export default Header
