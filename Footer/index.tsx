import React, { CSSProperties } from 'react'
import Content, { ContentProps } from '@nexys/components/Content/Content'
import { Col, Row } from 'antd'
import Text from '@nexys/components/Typography/Text'
import Image from 'next/image'

function Footer(props: ContentProps) {
  const styleFooter: CSSProperties = {
    color: 'white',
    width: '100%',
    height: 428,
    background: '#203F81',
    paddingTop: 120,
    position: 'relative',
  }

  const styleIcon = {
    background: '#FF5B03',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    marginRight: 16,
  }

  const dataKontak = [
    {
      id: 1,
      sosmed: 'hello@nusantech.com',
      icon: '/static/images/icons/gmail.svg',
      to: '/',
    },
    {
      id: 2,
      sosmed: '@NusaDevelopmentProgram',
      icon: '/static/images/icons/instagram.svg',
      to: '/',
    },
    {
      id: 3,
      sosmed: '081214136860',
      icon: '/static/images/icons/telephone.svg',
      to: '/',
    },
  ]
  return (
    <Content
      id={'contributors'}
      component={(props) => <footer {...props} />}
      styleContainer={styleFooter}
      {...props}
    >
      <div style={{ position: 'absolute', top: '57px', left: '-80px' }}>
        <Image
          src={'/static/images/detail/elipseFooterLeft.svg'}
          width={324}
          height={324}
        />
      </div>
      <div style={{ position: 'absolute', bottom: '0px', right: '0px' }}>
        <Image
          src={'/static/images/detail/elipseFooterRight.png'}
          width={120}
          height={200}
        />
      </div>
      <Row style={{ width: '100%' }}>
        <Col
          xs={{ span: 5, offset: 1 }}
          lg={{ span: 6, offset: 2 }}
          style={{ marginRight: '100px' }}
        >
          <Row style={{ marginBottom: 40 }}>
            <Image
              src={'/static/images/logo/logoWhiteOrange.png'}
              width={196}
              height={61}
            />
          </Row>
          <Row style={{ fontWeight: '500' }}>
            <Text size={16}>
              Jl. Daan Mogot Ruko Aldiron Blok D 8A No. 119 Kec. Kebun Jeruk,
              Kel. Duri Kepa Jakarta Barat 15110
            </Text>
          </Row>
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Row style={{ marginBottom: 30 }}>
            <Text size={18} style={{ fontWeight: 700, color: '#93A8DB' }}>
              Kontak kami
            </Text>
          </Row>
          {dataKontak.map((item) => (
            <Row style={{ marginBottom: 24 }} key={item.id}>
              <span style={styleIcon}>
                <Image src={item.icon} width={13} height={10} />
              </span>
              <Text
                style={{ fontWeight: 600 }}
                size={16}
                fontFamily={'regular'}
              >
                {item.sosmed}
              </Text>
            </Row>
          ))}
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 1 }}>
          <Row>
            <Text size={18} style={{ fontWeight: 700, color: '#93A8DB' }}>
              Navigasi
            </Text>
          </Row>
          <Row style={{ marginTop: 30 }}>
            <Row>
              <Col>
                <Text>Beranda</Text>
              </Col>
              <Col style={{ marginLeft: 40 }}>
                <Text>Mentor</Text>
              </Col>
            </Row>
            <Row>
              <Col style={{ marginTop: 24, marginRight: 40, marginBottom: 24 }}>
                <Text>Program</Text>
              </Col>
              <Col style={{ marginTop: 24 }}>
                <Text>Testimoni</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Artikel</Text>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Content>
  )
}

export default Footer
