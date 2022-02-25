#include <stdio.h>
#include <string.h>
char line[1000];
int main()
{
		scanf("%s",line);
		int ans=0;
		for(int i=0; i<N ; i++)
		{
			if(line[i] == '2') ans++;
		}
		printf("%d\n",ans);
}

