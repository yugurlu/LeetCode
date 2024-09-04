int myAtoi(char* s) {
    long result = 0, i = 0, digit = 1, negative = 1;

    while (s[i] == 32 || (s[i] >= 9 && s[i] <= 13))
        i++;
    
    if (s[i] && (s[i] == '-' || s[i] == '+'))
    {
        if (s[i] == '-') negative = -1;
        i++;
    }
    
    while (s[i] && s[i] == '0') i++;
    
    while(s[i] && (48 <= s[i] && s[i] <= 57))
    {
        result *= 10;
        result += s[i] - '0';
        i++;

        if (result * negative > 2147483647)
            return 2147483647;
		if (result * negative < -2147483648)
			return -2147483648;
    }
    
    return result * negative;
}