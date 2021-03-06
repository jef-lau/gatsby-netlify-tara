import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Button,
    Container,
    Menu,
    Sidebar,
    Segment,
    Icon,
    Responsive
} from 'semantic-ui-react'
import 'semantic-ui-less/semantic.less'
import getWidth from './getWidth'

class MobileContainer extends Component {
    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            >
                <Menu.Item as='a' active href='/'>Home</Menu.Item>
                <Menu.Item as='a' href='/media'>Media</Menu.Item>
                <Menu.Item as='a' href='/philanthropy'>Philanthropy</Menu.Item>
                <Menu.Item as='a' href='/gallery'>Gallery</Menu.Item>
                <Menu.Item as='a' href='/about'>About</Menu.Item>
                <Menu.Item as='a' href='/publish-in-paradise'>Publish in Paradise</Menu.Item>
                <Menu.Item as='a' href='/contact'>Contact</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
                inverted
                textAlign='center'
                vertical
            >
                <Container>
                <Menu inverted pointing secondary size='large'>
                    <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Button as='a' href='/contact' style={{ marginLeft: '0.5em' }} primary>
                            Say Hello!
                        </Button>
                    </Menu.Item>
                </Menu>
                </Container>
            </Segment>

            {children}
            </Sidebar.Pusher>
        </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

export default MobileContainer