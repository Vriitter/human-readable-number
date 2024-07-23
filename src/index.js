module.exports = function toReadable (number) {
   const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const dozens = [' ',' ','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   let result = '';

   if (number < 20) {
      return ones[number];
   }

   if (number >= 100) {
      result += ones[Math.floor(number / 100)] + ' hundred';
      number %= 100;
      if(number > 0) {
         result += ' '
      }
   }

   if (number>= 20) {
      result += dozens[Math.floor(number / 10)] + ' ';
      number %= 10;
   }

   if (number > 0) {
      result += ones[number];
   }

   return result.trim()
}
