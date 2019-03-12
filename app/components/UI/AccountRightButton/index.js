import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Identicon from '../Identicon';
import { toggleAccountsModal } from '../../../actions/modals';

const styles = StyleSheet.create({
	leftButton: {
		marginTop: 12,
		marginRight: Platform.OS === 'android' ? 22 : 18,
		marginBottom: 12
	}
});

/**
 * UI Component that renders on the top right of the navbar
 * showing an identicon for the selectedAddress
 */
class AccountRightButton extends Component {
	static propTypes = {
		/**
		 * Selected address as string
		 */
		address: PropTypes.string,
		/**
		 * Action that toggles the account modal
		 */
		toggleAccountsModal: PropTypes.func
	};

	render = () => {
		const { address, toggleAccountsModal } = this.props;
		return (
			<TouchableOpacity style={styles.leftButton} onPress={toggleAccountsModal} testID={'navbar-account-button'}>
				<Identicon diameter={28} address={address} />
			</TouchableOpacity>
		);
	};
}

const mapStateToProps = state => ({ address: state.engine.backgroundState.PreferencesController.selectedAddress });
const mapDispatchToProps = dispatch => ({
	toggleAccountsModal: () => dispatch(toggleAccountsModal())
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AccountRightButton);