import React, { Component } from 'react';

import Icon from '../../General/Icon';

import {
  TextFieldContainer,
  TextFieldInput,
  TextFieldLabel,
} from '../../Style/Input/TextFieldStyle';

class TextField extends Component <Props, State> {
  constructor(props) {
    super(props);
    const { type } = this.props;

    this.state = {
      floating: false,
      inputType: type,
    };
  }

  handleFocusChange = (onBlur) => {
    const listener = (e) => {
      this.setState({
        floating: e.target.value.length > 0,
      });

      if (onBlur !== undefined) {
        return onBlur();
      }
    };

    return listener;
  }

  handleShowPassword = () => {
    const { inputType } = this.state;

    this.setState({
      inputType: inputType === 'password' ? 'text' : 'password',
    });
  }

  componentDidMount() {
    const { value, defaultValue } = this.props;
    if (value !== undefined || defaultValue !== undefined) {
      if (value !== '') {
        this.setState({
          floating: true,
        });
      }
    }
  }

  render() {
    const {
      type,
      label,
      value,
      status,
      disabled,
      className,
      onBlur,
      small,
      ...defaultProps
    } = this.props;

    const { floating, inputType } = this.state;

    return (
      <TextFieldContainer className={className}>
        <TextFieldInput
          type={inputType}
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange(onBlur)}
          floating={floating}
          value={value}
          aria-label={label}
          small={small}
          {...defaultProps}
        />
        <TextFieldLabel
          floating={floating}
          status={status}
          small={small}
        >
          {label}
        </TextFieldLabel>
        {type === 'password'
          && (
            <div className="see-password" onClick={this.handleShowPassword}>
              <Icon
                name={inputType === 'password' ? 'eye' : 'eye-slashed'}
                color={inputType === 'password' ? 'black' : '#777777'}
                size="18"
              />
            </div>
          )
        }
      </TextFieldContainer>
    );
  }
}

type Props = {
  type: string,
  label: string,
  status: string,
  disabled: boolean,
  className: string,
  small: boolean,
}

type State = {
  floating: boolean,
};

export default TextField;
