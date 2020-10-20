import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import request from "superagent";
import debounce from "lodash.debounce";

class InfiniteUsers extends Component {
  constructor(props) {
    super(props);

    // Sets up our initial state
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      images: [
            'url(images/img-1.jpg)',
            'url(images/img-2.jpg)',
            'url(images/img-3.jpg)',
            'url(images/img-4.jpg)',
            'url(images/img-5.jpg)',
            'url(images/img-6.jpg)',
            'url(images/img-7.jpg)',
            'url(images/img-8.jpg)',
            'url(images/img-9.jpg)',
            'url(images/img-10.jpg)',
            'url(images/img-11.jpg)',
            'url(images/img-12.jpg)',
            'url(images/img-13.jpg)',
            'url(images/img-14.jpg)',
            'url(images/img-15.jpg)',
            'url(images/img-16.jpg)'
      ]
    }

    
    // Binds our scroll event handler
    window.onscroll = debounce(() => {
      const {
        loadImages,
        state: {
          error,
          isLoading,
          hasMore,
        },
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || isLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        loadImages();
      }
    }, 100);
  }


  render() {
    const {
      error,
      hasMore,
      isLoading,
      images,
    } = this.state;

    return (
        <section className="colorlib-work" data-section="work">
        <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <h2 className="colorlib-heading animate-box">Recent Work</h2>
          </div>
        </div>
        <div className="row">
        {images.map((image, index)=>{
            return(
            <Fragment key ={index}>
            <hr />
            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
            <div className="project" style={{backgroundImage: `url(images/img-${index+1}.jpg)`}}>
              <div className="desc">
                <div className="con">
                
                </div>
              </div>
            </div>
          </div>
          </Fragment>)
        })}
        <hr />
        {error &&
          <div style={{ color: '#900' }}>
            {error}
          </div>
        }
        {isLoading &&
          <div>Loading...</div>
        }
        {!hasMore &&
          <div>You did it! You reached the end!</div>
        }
      </div>
      </div>
      </section>
    );
  }
}

export default InfiniteUsers