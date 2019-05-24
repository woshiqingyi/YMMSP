Component({
  methods: {
    inputeBayStoreName(event) {
      this.setData({
        'eBayForm.StoreName': event.detail.value
      })
    },

    inputeBayEmail(event) {
      this.setData({
        'eBayForm.eBayEmail': event.detail.value
      })
    },

    inputeBayWebSiteAddress(event) {
      this.setData({
        'eBayForm.WebSiteAddress': event.detail.value
      })
    },

    inputeBayPayPalEmail(event) {
      this.setData({
        'eBayForm.PayPalEmail': event.detail.value
      })
    },

    inputeBayPayPalMerInfo(event) {
      this.setData({
        'eBayForm.PayPalMerInfo': event.detail.value
      })
    },

    inputeBayPayPalMerAccount(event) {
      this.setData({
        'eBayForm.PayPalMerAccount': event.detail.value
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
