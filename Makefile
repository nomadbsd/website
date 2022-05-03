TARGETS =  index.html errata-130R-20210508.html screenshots.html team.html contact.html download.html errata-1.3.2.html handbook/handbook.html mirror.html

all: ${TARGETS}

index.html:index.in
	./build_page index.html < index.in > $@

errata-130R-20210508.html:errata-130R-20210508.in
	./build_page errata-130R-20210508.html < errata-130R-20210508.in > $@

screenshots.html:screenshots.in
	./build_page screenshots.html < screenshots.in > $@

team.html:team.in
	./build_page team.html < team.in > $@

contact.html:contact.in
	./build_page contact.html < contact.in > $@

download.html:download.in
	./build_page download.html < download.in > $@

errata-1.3.2.html:errata-1.3.2.in
	./build_page errata-1.3.2.html < errata-1.3.2.in > $@

handbook/handbook.html:handbook/handbook.in
	./build_page -r ../ handbook/handbook.html < handbook/handbook.in > $@

mirror.html:mirror.in
	./build_page mirror.html < mirror.in > $@

clean:
	-rm -f ${TARGETS}
