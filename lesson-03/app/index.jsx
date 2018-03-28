// Imports React dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Imports components from Fluent Web
import { Heading, Paragraph, Image, CallToAction } from '@ms-fw/fw-react/components';
import { Grid, Column, Page } from '@ms-fw/fw-react/layouts';

// Imports styles from Fluent Web
const styles = require('../build/public/assets/styles/css/fw-west-european-default-orange.css');

// ==================================================================
// Configuring Header component
import logoMsGray from './assets/images/logos/microsoft-gray.png';
 
// ==================================================================
// Configuring other components

// ==================================================================
// Render app

ReactDOM.render(
    <Page>
        <Grid 
            tag='section1'
            columnCount={12}
            gutter={6}
            verticalAlign={'center'}
            horizontalAlign={'center'}
            >
            {/* Row 1 */}
            <Column
                row={1}
                span={[12,12,6,6]}
                >
                <Image
                    vp5='http://placehold.it/740x417'
                    vp4='http://placehold.it/582x328'
                    vp3='http://placehold.it/494x278'
                    vp2='http://placehold.it/720x405'
                    vp1='http://placehold.it/491x276'
                    alt="Placeholder"
                    className='x-edge-hard'
                />
                <Heading
                    tag="h3"
                    level={5}
                    text="Placeholder"
                />
                <Paragraph
                    level={1}
                    text="Microsoft's mission is to empower every person and every organization on the planet to achieve more."
                />
                <CallToAction
                    weight="light"
                    href="#"
                    text="Shop now"
                />
            </Column>
            <Column
                row={[2,2,1,1]}
                span={[12,12,6,6]}
                >
                <Image
                    vp5='http://placehold.it/740x417'
                    vp4='http://placehold.it/582x328'
                    vp3='http://placehold.it/494x278'
                    vp2='http://placehold.it/720x405'
                    vp1='http://placehold.it/491x276'
                    alt="Placeholder"
                    className='x-edge-hard'
                />
                <Heading
                    tag="h3"
                   level={5}
                    text="Placeholder"
                />
                <Paragraph
                    level={1}
                    text="Microsoft's mission is to empower every person and every organization on the planet to achieve more."
                />
                <CallToAction
                    weight="light"
                    href="#"
                    text="Shop now"
                />
            </Column>
            <Column
                row={[3,3,2,2]}
                span={[12,12,4,4]}
                >
                <Image
                    vp5='http://placehold.it/740x417'
                    vp4='http://placehold.it/582x328'
                    vp3='http://placehold.it/494x278'
                    vp2='http://placehold.it/720x405'
                    vp1='http://placehold.it/491x276'
                    alt="Placeholder"
                    className='x-edge-hard'
                />
                <Heading
                    tag="h3"
                   level={5}
                    text="Placeholder"
                />
                <Paragraph
                    level={1}
                    text="Microsoft's mission is to empower every person and every organization on the planet to achieve more."
                />
                <CallToAction
                    weight="light"
                    href="#"
                    text="Shop now"
                />
            </Column>
            <Column
                row={[4,4,2,2]}
                span={[12,12,4,4]}
                >
                <Image
                    vp5='http://placehold.it/740x417'
                    vp4='http://placehold.it/582x328'
                    vp3='http://placehold.it/494x278'
                    vp2='http://placehold.it/720x405'
                    vp1='http://placehold.it/491x276'
                    alt="Placeholder"
                    className='x-edge-hard'
                />
                <Heading
                    tag="h3"
                   level={5}
                    text="Placeholder"
                />
                <Paragraph
                    level={1}
                    text="Microsoft's mission is to empower every person and every organization on the planet to achieve more."
                />
                <CallToAction
                    weight="light"
                    href="#"
                    text="Shop now"
                />
            </Column>
            <Column
                row={[5,5,2,2]}
                span={[12,12,4,4]}
                >
                <Image
                    vp5='http://placehold.it/740x417'
                    vp4='http://placehold.it/582x328'
                    vp3='http://placehold.it/494x278'
                    vp2='http://placehold.it/720x405'
                    vp1='http://placehold.it/491x276'
                    alt="Placeholder"
                    className='x-edge-hard'
                />
                <Heading
                    tag="h3"
                   level={5}
                    text="Placeholder"
                />
                <Paragraph
                    level={1}
                    text="Microsoft's mission is to empower every person and every organization on the planet to achieve more."
                />
                <CallToAction
                    weight="light"
                    href="#"
                    text="Shop now"
                />
            </Column>
            <Column
                row={[6,6,3,3]}
                span={[12,12,6,6]}
                >
                <Image
                    vp5='http://placehold.it/740x417'
                    vp4='http://placehold.it/582x328'
                    vp3='http://placehold.it/494x278'
                    vp2='http://placehold.it/720x405'
                    vp1='http://placehold.it/491x276'
                    alt="Placeholder"
                    className='x-edge-hard'
                />
                <Heading
                    tag="h3"
                   level={5}
                    text="Placeholder"
                />
                <Paragraph
                    level={1}
                    text="Microsoft's mission is to empower every person and every organization on the planet to achieve more."
                />
                <CallToAction
                    weight="light"
                    href="#"
                    text="Shop now"
                />
            </Column>
            <Column
                row={[7,7,3,3]}
                span={[12,12,6,6]}
                >
                <Image
                    vp5='http://placehold.it/740x417'
                    vp4='http://placehold.it/582x328'
                    vp3='http://placehold.it/494x278'
                    vp2='http://placehold.it/720x405'
                    vp1='http://placehold.it/491x276'
                    alt="Placeholder"
                    className='x-edge-hard'
                />
                <Heading
                    tag="h3"
                   level={5}
                    text="Placeholder"
                />
                <Paragraph
                    level={1}
                    text="Microsoft's mission is to empower every person and every organization on the planet to achieve more."
                />
                <CallToAction
                    weight="light"
                    href="#"
                    text="Shop now"
                />
            </Column>
            <Column
                row={[8,8,4,4]}
                span={[12,12,6,6]}
                >
                <Image
                    vp5='http://placehold.it/740x417'
                    vp4='http://placehold.it/582x328'
                    vp3='http://placehold.it/494x278'
                    vp2='http://placehold.it/720x405'
                    vp1='http://placehold.it/491x276'
                    alt="Placeholder"
                    className='x-edge-hard'
                />
                <Heading
                    tag="h3"
                    level={5}
                    text="Placeholder"
                />
                <Paragraph
                    level={1}
                    text="Microsoft's mission is to empower every person and every organization on the planet to achieve more."
                />
                <CallToAction
                    weight="light"
                    href="#"
                    text="Shop now"
                />
            </Column>
            <Column
                row={[9,9,4,4]}
                span={[12,12,6,6]}
                >
                <Image
                    vp5='http://placehold.it/740x417'
                    vp4='http://placehold.it/582x328'
                    vp3='http://placehold.it/494x278'
                    vp2='http://placehold.it/720x405'
                    vp1='http://placehold.it/491x276'
                    alt="Placeholder"
                    className='x-edge-hard'
                />
                <Heading
                    tag="h3"
                    level={5}
                    text="Placeholder"
                />
                <Paragraph
                    level={1}
                    text="Microsoft's mission is to empower every person and every organization on the planet to achieve more."
                />
                <CallToAction
                    weight="light"
                    href="#"
                    text="Shop now"
                />
            </Column>
        </Grid>       
    </Page>
    ,
    document.getElementById('root')
);