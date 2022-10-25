function replaceDangerousString(str) {
	if (str && typeof str === 'string') {
		return str
			.toLowerCase()
			.replace(/.*file:.*/, 'file')
			.replace(/.*mailto:.*/, 'mailto')
			.replace(/.*localhost:.*/, 'localhost')
			.replace(/.*tel:.*/, 'tel')
			.replace(/.*sip:.*/, 'sip')
			.replace(/.*skype:.*/, 'skype')
	}
}

function adobeAnalyticsFilter() {
	if (window._adobeAnalyticsFilter_) {
		var properties = [
			'channel',
			'campaign',
			'linkName',
			'linkObject',
			'linkType',
			'linkURL',
			'pageName',
			'pageType',
			'pageURL',
			's_objectID'
		]

		var i

		for (i = 1; i <= 3; i++) {
			properties.push('list' + i)
		}

		for (i = 1; i <= 5; i++) {
			properties.push('hier' + i)
		}

		for (i = 1; i <= 75; i++) {
			properties.push('prop' + i)
		}

		for (i = 1; i <= 200; i++) {
			properties.push('eVar' + i)
		}

		for (i = 0; i < properties.length; i++) {
			if (s.hasOwnProperty(properties[i])) {
				var val = replaceDangerousString(s[properties[i]])
				if (val) s[properties[i]] = val
			}
		}

		var r = replaceDangerousString(document.referrer)
		if (r) s.referrer = r
	}
}

s.usePlugins = true
s.doPlugins = function() {
	adobeAnalyticsFilter()
}