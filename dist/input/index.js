Component({

  properties: {
    title: {
      type: String,
      value: '',
    },
    placeholder: {
      type: String,
      value: '',
    },
  },

  methods: {
    inputeBayStoreName(event) {
      this.setData({
        'eBayForm.StoreName': event.detail.value
      })
    },

    submitInfo () {
      console.log('11111')
    },

    showTerms() {
      wx.navigateTo({
        url: 'ebay-terms/index',
      })
    }
  },

  data: {
    eBayForm: {
      /*ID: 0,
      Status: -1,
      PayPalUserInfoPic:"",
      PayPalUserInfoPicUrl:"",
      */
      StoreName: '',
      eBayEmail: '',
      WebSiteAddress: '',
      PayPalEmail: '',
      PayPalMerInfo: '',
      PayPalMerAccount: ''
    },
  }
})
