bool isPalindrome(int x) {
  
  int i = 0, j = 0, digits = 1;
  char stringNumber[11];
  
  if (x < 0) return false;
  
  while (x / digits >= 10)
    digits *= 10;
    
  while (digits != 0)
  {
    stringNumber[i++] = (x / digits) + '0';
    x %= digits;
    digits /= 10;
  }
  
  stringNumber[i--] = 0;
  
  while (i > 0) 
  {
    if (stringNumber[i--] != stringNumber[j++])
      return false;
  }
  
  return true;
}