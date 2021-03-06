import React from 'react';

import OmniSearch from '../../src/Input/OmniSearch';
import Icon from '../../src/General/Icon';
import Button from '../../src/General/Button';
import Collapsible from '../../src/Display/Collapsible';

const OmniSearchStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Omni Search
      </h1>
      <p>
        <code>
          {'import { OmniSearch } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <div style={{ marginBottom: '10em' }}>
      <OmniSearch
        label="Find Internships, Locations, and Companies"
        content={(
          <Button theme="blue">
                    Go!
            {' '}
            <Icon name="arrow-round-forward" color="white" />
          </Button>
        )}
      >
        <OmniSearch.Body>
          <OmniSearch.List title="Karir Populer">
            <OmniSearch.Item>
              Business Development/ Sales
            </OmniSearch.Item>
            <OmniSearch.Item>
              Software Engineering
            </OmniSearch.Item>
            <OmniSearch.Item>
              Design
            </OmniSearch.Item>
          </OmniSearch.List>
          <OmniSearch.List title="Lokasi Populer">
            <OmniSearch.Item>
              <Icon name="location" color="#AAAAAA" />
              {' '}
              Lowongan Pekerjaan di Jakarta
            </OmniSearch.Item>
            <OmniSearch.Item>
              <Icon name="location" color="#AAAAAA" />
              {' '}
              Lowongan Pekerjaan di Bogor
            </OmniSearch.Item>
            <OmniSearch.Item>
              <Icon name="location" color="#AAAAAA" />
              {' '}
              Lowongan Pekerjaan di Bandung
            </OmniSearch.Item>
          </OmniSearch.List>
          <OmniSearch.List title="Perusahaan Populer">
            <OmniSearch.Item>
              <img src="https://cdn-images-1.medium.com/max/1600/1*5fCAiEdtIXD53sM90gn5JA.jpeg" width="40" height="40" alt="gojek" />
              {' '}
              Gojek
            </OmniSearch.Item>
            <OmniSearch.Item>
              <img src="http://sp.beritasatu.com/media/images/original/20140925164546835.jpg" width="40" height="40" alt="traveloka" />
              {' '}
              Traveloka
            </OmniSearch.Item>
            <OmniSearch.Item>
              <img src="https://ecs7.tokopedia.net/img/microsite-brand-resource/logo-tokopedia-asset.png" width="40" height="40" alt="traveloka" />
              {' '}
              Tokopedia
            </OmniSearch.Item>
          </OmniSearch.List>
        </OmniSearch.Body>
      </OmniSearch>
    </div>

    <div style={{ marginBottom: '2em' }}>
      <Collapsible label="Usage" isOpen={false}>
        <pre>
          <pre>
            {`<OmniSearch
  label="Find Internships, Locations, and Companies"
  value="Traveloka"
  content={(
    <Button theme="blue">
      Go!
      <Icon name="arrow-round-forward" color="white" />
    </Button>
  )}
>
  <OmniSearch.Body>
    <OmniSearch.List title="Karir Populer">
      <OmniSearch.Item onClick={this.handleClick}>
        Business Development/ Sales
      </OmniSearch.Item>
    </OmniSearch.List>
    <OmniSearch.List title="Lokasi Populer">
      <OmniSearch.Item>
        <Icon name="location" color="#AAAAAA" />
        Lowongan Pekerjaan di Jakarta
      </OmniSearch.Item>
    </OmniSearch.List>
    <OmniSearch.List title="Perusahaan Populer">
      <OmniSearch.Item>
        <img src="..." width="40" height="40" alt="gojek" />
        Gojek
      </OmniSearch.Item>
    </OmniSearch.List>
  </OmniSearch.Body>
</OmniSearch>`}
          </pre>
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
            {'Sets placeholder'}
          </td>
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
            no
          </td>
          <td>
            {'Sets input value'}
          </td>
        </tr>
        <tr>
          <td>
            content
          </td>
          <td>
            element
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            no
          </td>
          <td>
            Content to display element inside Input Field
          </td>
        </tr>
        <tr>
          <td>
            title
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
            {'Sets title tag on <OmniSearch.Item />'}
          </td>
        </tr>
        <tr>
          <td>
            onClick
          </td>
          <td>
            function
          </td>
          <td></td>
          <td>
            any
          </td>
          <td>
            yes
          </td>
          <td>
            {'You can pass onClick function on <OmniSearch.Item />'}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default OmniSearchStory;
