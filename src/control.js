import React from 'react'
import styled from 'styled-components'
import Geosuggest from 'react-geosuggest'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

const Container = styled.div`
  .geosuggest__suggests--hidden {
    max-height: 0;
    overflow: hidden;
    border-width: 0;
    display: none;
  }
  .geosuggest__item--active {
    background: #267dc0;
    color: #fff;
  }

  .geosuggest__input-wrapper input {
    width: 100%;
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  .geosuggest__suggests {
    list-style-type: none;
  }

  .geosuggest__item {
    cursor: pointer;
    border-top: solid 1px rgb(223, 223, 227);
    padding-top: 5px;
    padding-bottom: 5px;
  }
`

const Hr = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ddd;
  position: absolute;
  left: 0;
  margin-bottom: 10px;
`

const MapContainer = styled.div`
  height: 400px;
  margin-top: 10px;
`

export default class Control extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      defaultCenter: { lat: -34.397, lng: 150.644 },
      selected: {
        latitude: null,
        longitude: null
      }
    }
  }

  onSuggestSelect = (place) => {
    const {
      location: { lat, lng }
    } = place

    const { latitude, longitude } = {
      latitude: parseFloat(lat),
      longitude: parseFloat(lng)
    }

    this.setState({
      selected: {
        latitude,
        longitude
      }
    })

    this.props.onChange({ latitude, longitude })
  }

  onSelectMarker = (mark) => {
    const { latitude, longitude } = {
      latitude: parseFloat(mark.latLng.lat()),
      longitude: parseFloat(mark.latLng.lng())
    }

    this.setState({
      selected: {
        latitude,
        longitude
      }
    })

    this.props.onChange({
      latitude,
      longitude
    })
  }

  render() {
    const {
      forID,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
      onChange
    } = this.props

    return (
      <div
        id={forID}
        className={classNameWrapper}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
      >
        <Container>
          <Geosuggest
            placeholder="Start typing!"
            location={new google.maps.LatLng(53.558572, 9.9278215)}
            onSuggestSelect={this.onSuggestSelect}
            radius={20}
          />

          <Hr />

          <GoogleMaps
            containerElement={<MapContainer />}
            mapElement={<div style={{ height: `100%` }} />}
            defaultCenter={
              this.state.defaultCenter
                ? this.state.defaultCenter
                : gooogleDefaultCenter
            }
            lat={this.state.selected.latitude}
            lng={this.state.selected.longitude}
            onClick={this.onSelectMarker}
          />
        </Container>
      </div>
    )
  }
}

const GoogleMaps = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.defaultCenter}
    center={
      (props.lat && props.lng && { lat: props.lat, lng: props.lng }) ||
      props.defaultCenter
    }
    onClick={props.onClick}
  >
    {props.lat &&
      props.lng && <Marker position={{ lat: props.lat, lng: props.lng }} />}
  </GoogleMap>
))
