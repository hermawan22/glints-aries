import React from 'react';

import RadioButton from '../../src/Input/RadioButton';
import Collapsible from '../../src/Display/Collapsible';

const RadioButtonStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Radio Button
      </h1>
      <p>
        <code>
          {'import { RadioButton } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <RadioButton label="Full Time" name="job-type" value="full-time" />
      <div style={{ display: 'inline-flex', marginRight: '1em' }} />
      <RadioButton label="Intership" name="job-type" value="intership" />
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          {`<RadioButton 
  label="Full Time" 
  name="job-type" 
  value="full-time"
  />`}
        </pre>
      </Collapsible>
    </div>

    <table className="doc-table">
      <thead>
        <tr style={{ borderBottom: '1px solid lightgrey' }}>
          <th colSpan="6">
            <h3 style={{ margin: '.8em 0' }}>
              Props
            </h3>
          </th>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Default Value
          </th>
          <th>
            Possible Value
          </th>
          <th>
            Required
          </th>
          <th>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            label
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            Sets the label of radio button
          </td>
        </tr>
        <tr>
          <td>
            name
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            value
          </td>
          <td>
            string
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            checked
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              false
            </code>
          </td>
          <td>
            <code>
              true | false
            </code>
          </td>
          <td>
            no
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            theme
          </td>
          <td>
            boolean
          </td>
          <td>
            <code>
              black
            </code>
          </td>
          <td>
            <code>
              white
            </code>
          </td>
          <td>
            no
          </td>
          <td>
            Sets theme of Radio Button
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RadioButtonStory;
