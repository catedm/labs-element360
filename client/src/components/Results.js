import React, { Component } from 'react';
import Loader from './Loader';
import axios from 'axios';

export default class Results extends Component {

  state = {
    domain: "https://www.element-360.com",
    location: "Asheville NC",
    title: "Generating Technical Foundation Report...",
    loading: true,
    progressBarValue: 10,

    GTMetrix: {
      first_paint_time: null,
      report_url: null,
      page_load_time: null,
      fully_loaded_time: null,
      pagespeed_score: null,
    },

    GoogleSearchConsole: {
      mobileFriendly: null,
      screenshotPath: null,
    }
  }

  componentDidMount() {
    // fetch GTMetrix data
    this.fetchGTMetrix();
    // fetch google search console mobile friendly?
    this.fetchGSC();
  }

  async fetchGSC() {
    const res = await axios.post('/api/googlesearchconsole', {
      url: this.state.domain
    });

    return this.setState({
      ...this.state,
      GoogleSearchConsole: {
        mobileFriendly: res.data.mobileFriendly === "MOBILE_FRIENDLY" ? true : false,
        screenshotPath: res.data.screenshotPath
      },
      title: "Gathering Organic Search Visibility Data...",
      progressBarValue: 50
    });
  }

  async fetchGTMetrix() {
    const res = await axios.post('/api/gtmetrix', {
      url: this.state.domain
    });

    const { first_paint_time, report_url, page_load_time, fully_loaded_time, pagespeed_score } = res.data.results;

    return this.setState({
      ...this.state,
      GTMetrix: {
        first_paint_time: first_paint_time,
        report_url: report_url,
        page_load_time: page_load_time,
        fully_loaded_time: fully_loaded_time,
        pagespeed_score: pagespeed_score,
      },
      title: "Generating Mobile Friendly Report...",
      progressBarValue: 25
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Loader
            title={this.state.title}
            progressBarValue={this.state.progressBarValue}
          />
        </div>
      )
    } else {
      return (
        <h1>Done!</h1>
      )
    }
  }
}