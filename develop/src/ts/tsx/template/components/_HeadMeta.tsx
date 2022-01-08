import React from 'react';

export class HeadMeta extends React.Component {
  render(): JSX.Element {
    return (
      <>
        <meta property="og:title" content={this.props.meta.title} />
        <meta property="og:description" content={this.props.meta.description} />
        <meta property="og:url" content={this.props.meta.url} />
        <meta property="og:type" content={this.props.meta.type} />
        <meta property="og:image" content={this.props.meta.ogpImage} />
        <meta name="twitter:title" content={this.props.meta.title} />
        <meta name="twitter:description" content={this.props.meta.description} />
        <meta name="twitter:url" content={this.props.meta.url} />
        <meta name="description" content={this.props.meta.description} />
        <link rel="canonical" href={this.props.meta.url} />
        <title>{this.props.meta.title}</title>
      </>
    )
  }
}