import {Drawer} from 'baseui/drawer'
import React, {Fragment} from 'react'
import {Button, KIND} from 'baseui/button'
import {Checkbox, STYLE_TYPE} from 'baseui/checkbox'

type MenuProps = {
	isOpen: boolean
	onClose: () => void
}

const Menu = ({isOpen, onClose}: MenuProps) => {
	return (
		<Fragment>
			<Drawer onClose={onClose} isOpen={isOpen} anchor={'right'} />
		</Fragment>
	)
}

export default Menu
